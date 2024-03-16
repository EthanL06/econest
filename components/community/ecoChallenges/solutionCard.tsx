import React, {useEffect, useState} from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { addSolutionToReadList, getUserById } from "@config/routes";

type Challenge = {
  href: string;
  writer: string;
  name: string;
  date: string;
  description: string;
  content: string;
  image: string;
  slug: string;
  ecoPoints: number;
};

type CustomCardProps = {
  challenge: Challenge;
};

const SolutionCard: React.FC<CustomCardProps> = ({ challenge }) => {
  const router = useRouter();
  const [showMore, setShowMore] = React.useState(false);
  const [readSolutions, setReadSolutions] = useState<string[]>([]);

  useEffect(() => {
    const fetchReadSolutions = async () => {
      const userID = localStorage.getItem("userID");
      if (userID) {
        try {
          const user = await getUserById(userID);
          if (user) {
            setReadSolutions(user.blogPosts || []);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchReadSolutions();
 }, []);


  const handleClick = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const challengeID = challenge.href;
      const points = challenge.ecoPoints;
      if (userID)
        await addSolutionToReadList(userID, challengeID, points);
      console.log("Solution read claimed successfully");
    } catch (error) {
      console.error("Error claiming solution read:", error);
    } finally {
      router.push("/solutions/" + challenge.href);
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

  const isSolutionRead = readSolutions.includes(challenge.href);


  return (
    <div className="flex h-full flex-col rounded-lg border bg-card shadow-sm hover:bg-gray-200 ">
      <img
        src={challenge.image}
        alt={challenge.name}
        className="h-48 w-full rounded-lg object-cover "
      />
      <div className="flex grow flex-col p-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          {challenge.name}
        </h3>
        <div className=" mb-2 flex items-center space-x-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-500">
              {challenge.writer}
            </span>
          </div>

          <div className="flex items-center justify-center">•</div>

          <div className="flex items-center justify-center font-medium">
            <span className="text-sm font-medium text-gray-500">
              {challenge.date}
            </span>
          </div>
        </div>
        <p className="mb-4 grow text-sm text-muted-foreground">
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
            className={`px-4 py-2 text-sm font-bold z-20 ${
              isSolutionRead ? "cursor-not-allowed bg-gray-500 " : ""
            }`}
            onClick={isSolutionRead ? undefined : handleClick}
            disabled={isSolutionRead}
          >
            Read
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
