import React from 'react';
import User from "@/types/user";

interface LeaderboardSidebarItemProps {
 user: User;
}

const LeaderboardSidebarItem: React.FC<LeaderboardSidebarItemProps> = ({ user }) => {
 return (
   <li className="flex justify-between items-center p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer mt-2">
    <img src={user.profilePicture} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
     <div className="text-sm font-medium text-gray-900">{user.name}</div>
     <div className="text-sm text-gray-500">EcoPoints: {user.ecoPoints}</div>
   </li>
 );
};

export default LeaderboardSidebarItem;