import React from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

  const handleClick = () => {
    router.push("/solutions/" + challenge.href);
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

  return (
    <div className="flex h-full flex-col rounded-lg border bg-card shadow-sm hover:bg-gray-200">
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
          <Button onClick={handleClick} className="px-4 py-2 text-sm font-bold">
            Read
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
