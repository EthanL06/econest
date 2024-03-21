"use client";
import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addChallengeToUserClaimedList, getUserById } from "@config/routes";
import { toast } from "@/components/ui/use-toast";
type Challenge = {
  id: string;
  image: string;
  title: string;
  name: string;
  date: string;
  description: string;
  ecoPoints: number;
};

type CustomCardProps = {
  challenge: Challenge;
};

const CustomCard: React.FC<CustomCardProps> = ({ challenge }) => {
  const [showMore, setShowMore] = useState(false);

  const [claimedChallenges, setClaimedChallenges] = useState<string[]>([]);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    const fetchClaimedChallenges = async () => {
      const userID = localStorage.getItem("userID");
      if (userID) {
        try {
          const user = await getUserById(userID);
          if (user) {
            setClaimedChallenges(user.blogsRead || []);
            setIsDisabled(false);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchClaimedChallenges();
  }, []);

  const runDidChallenge = async () => {
    setIsClaiming(true);
    try {
      const userID = localStorage.getItem("userID");
      const challengeID = challenge.id;
      const points = challenge.ecoPoints;
      if (userID)
        await addChallengeToUserClaimedList(userID, challengeID, points);
      console.log("Challenge claimed successfully");
      setClaimedChallenges([...claimedChallenges, challengeID]);
    } catch (error) {
      console.error("Error claiming challenge:", error);
    } finally {
      setIsClaiming(false);
    }
  };

  const displayDescription = (description: string) => {
    if (description.length > 100) {
      return (
        <>
          {challenge.description.slice(0, 110)}...{" "}
          <Button
            onClick={() => setShowMore(!showMore)}
            className="h-auto p-0"
            variant={"link"}
          >
            Read More
          </Button>
        </>
      );
    }
    return description;
  };

  const isChallengeClaimed = claimedChallenges.includes(challenge.id);

  return (
    <div className="flex h-full flex-col rounded-lg border bg-card shadow-sm hover:bg-gray-200">
      <img
        src={challenge.image}
        alt={challenge.title}
        className="h-48 w-full rounded-lg object-cover "
      />

      <div className="flex grow flex-col p-4">
        <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">
          {challenge.title}
        </h3>
        <div className=" flex items-center space-x-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-500">
              {challenge.name}
            </span>
          </div>

          <div className="flex items-center justify-center">•</div>

          <div className="flex items-center justify-center font-medium">
            <span className="text-sm font-medium text-gray-500">
              {challenge.date}
            </span>
          </div>
        </div>
        <p className="mb-4  mt-2 grow text-pretty text-sm text-muted-foreground">
          {showMore
            ? challenge.description
            : displayDescription(challenge.description)}
        </p>
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <Leaf className="text-primary" size={18} />
            <span className="ml-2 text-sm font-semibold">
              {challenge.ecoPoints} Eco Points
            </span>
          </div>
          <Button
            className={`z-20 px-4 py-2 text-sm font-bold ${
              isChallengeClaimed ? "cursor-not-allowed bg-gray-500 " : ""
            }`}
            onClick={isChallengeClaimed ? undefined : runDidChallenge}
            disabled={isChallengeClaimed || isClaiming || isDisabled}
          >
            {isClaiming
              ? "Claiming..."
              : isChallengeClaimed
                ? "Claimed"
                : "Claim"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
