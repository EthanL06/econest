"use client";
import React from "react";
import User from "@/types/user";

import DiscussionNav from "./forumComponents/discussionNav";
import Discussions from "./forumComponents/discussions";
import LeaderboardSideBar from "./forumComponents/leaderboardSideBar";
import LeftSidebar from "./forumComponents/leftSidebar";

interface ForumContainerProps {
 user: User | null;
}

const ForumContainer: React.FC<ForumContainerProps> = ({ user }) => {
    return (
       <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
            <LeftSidebar />
        </div>
         <div className="w-full md:w-2/4">
           <DiscussionNav />
           <div className="mt-4">
             <Discussions user={user}/>
           </div>
         </div>
         <div className="w-full md:w-1/4">
           <LeaderboardSideBar />
         </div>
       </div>
    );
};

export default ForumContainer;