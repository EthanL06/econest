import React from 'react';
import { Leaf } from 'lucide-react'; 

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
 const handleClick = () => {
   window.location.href = "/solutions/" + challenge.href;
 };

 return (
    <div className="rounded-lg border bg-card shadow-sm hover:bg-gray-200" onClick={handleClick}>
      <img src={challenge.image} alt={challenge.name} className="w-full h-48 object-cover rounded-lg " />
      <div className="p-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight mb-2">{challenge.name}</h3>
        <div className="flex space-x-3 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500" >{challenge.writer}</span>
          </div>
          <div className="bg-green-500 rounded-lg px-1 ">
            <span className="text-xs text-white">{challenge.date}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
        <div className="flex ">
          <Leaf size={18} />
          <span className="ml-2 text-sm">{challenge.ecoPoints} Eco Points</span>
        </div>
      </div>
    </div>
 );
};

export default SolutionCard;