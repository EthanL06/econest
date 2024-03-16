"use client";
import React from "react";
import User from "@/types/user";
import Forum from "@/types/forum";

import DiscussionNav from "./forumComponents/discussionNav";
import Discussions from "./forumComponents/discussions";
import LeaderboardSideBar from "./forumComponents/leaderboardSideBar";
import LeftSidebar from "./forumComponents/leftSidebar";

interface ForumContainerProps {
 user: User | null;
 setSelectedForum: (forim: Forum | null) => void;
}

const ForumContainer: React.FC<ForumContainerProps> = ({ user, setSelectedForum }) => {
    return (
       <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
            <LeftSidebar />
        </div>
         <div className="w-full md:w-2/4">
           <DiscussionNav />
           <div className="mt-4">
             <Discussions user={user} setSelectedForum={setSelectedForum}/>
           </div>
         </div>
         <div className="w-full md:w-1/4">
           <LeaderboardSideBar />
         </div>
       </div>
    );
};

export default ForumContainer;