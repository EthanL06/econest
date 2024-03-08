"use client"
import React, { useEffect, useState } from 'react';
import User from "@/types/user";

import { fetchLeaderboard } from "@config/routes";

import LeaderboardSideBarItem from "./leaderboardSideBarItem";

const LeaderboardSideBar: React.FC = () => {
 const [topUsers, setTopUsers] = useState<User[]>([]);

 useEffect(() => {
    const fetchData = async () => {
      const users = await fetchLeaderboard();
      setTopUsers(users);
    };

    fetchData();
 }, []);

 return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <p className="mb-2 text-sm font-semibold">Congratulations to this months most eco-friendly users</p>
      <ul className="">
        {topUsers.map((user, index) => (
         <LeaderboardSideBarItem key={user.userID} user={user} />
        ))}
      </ul>
    </div>
 );
};

export default LeaderboardSideBar;