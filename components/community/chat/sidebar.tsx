"use client";
import User from "@/types/user";
import EcoChat from "@/types/ecoChat";
import SidebarItem from "./sidebarItem";
import React, { useEffect, useState } from "react";
import { fetchChats, addFriend, fetchFriends } from "@config/routes";
import NewChatModal from "./newChatModal";

interface SidebarProps {
 user: User | null;
 selectedChat: EcoChat | null;
 setSelectedChat: (chat: EcoChat | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, selectedChat, setSelectedChat }) => {
 const [chats, setChats] = useState<EcoChat[]>([]);
 const [friends, setFriends] = useState<User[]>([]);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');

 useEffect(() => {
    if (user) {
      fetchFriends(user).then(setFriends).catch(console.error);
    }
 }, [isModalOpen, user]);

 useEffect(() => {
    if (user) {
      fetchChats(user)
        .then((chats) => {
          setChats(chats);
        })
        .catch((error) => {
          console.error("Failed to fetch chats:", error);
        });
    }
 }, [user]);

 const filteredChats = chats.filter(chat => chat.chatName.toLowerCase().includes(searchQuery.toLowerCase()));
 // add filter to go off of the friends names 

 return (
    <div className="flex h-full w-full flex-col rounded-lg border border-gray-300 bg-white md:w-64 md:flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="mt-8 flex flex-col items-center justify-center p-4">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        <div className="flex items-center p-2">
          <input
            className="w-64 flex-shrink flex-grow rounded-md border border-gray-300 p-2"
            type="text"
            placeholder="Search..."
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <a
            href="#"
            onClick={() => setIsModalOpen(true)}
            className="mr-2 px-4 py-2 font-semibold text-blue-500 hover:text-blue-700"
          >
            Chat
          </a>
          {isModalOpen && (
            <NewChatModal friends={friends} user={user} onClose={() => setIsModalOpen(false)} />
          )}
        </div>
        <div className="flex flex-col overflow-y-auto">
          {filteredChats.map((chat, index) => (
            <SidebarItem
              key={index}
              user={user}
              chat={chat}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          ))}
        </div>
      </div>
    </div>
 );
};

export default Sidebar;




  // this method adds friends. i have it here cuz i was lazy to make a UI for it but ill have to do that later
    //  useEffect(() => {

    //   if (user && IWANTTOKILLMYSELFWHYDOYOUDISPLAYTWICE < 1) {
    //       IWANTTOKILLMYSELFWHYDOYOUDISPLAYTWICE++;
    //       let currentUserID = "53BK7w3TTfUjIaHXezpaGBIersX2";
    //       let friendID = "cLylZoeq65hIilcvYcnrWDG5sro2";
    //      addFriend(currentUserID, friendID).then(() => {
    //        console.log(user)
    //      }).catch((error) => {
    //        console.error("Failed to adding friend:", error);
    //      });
    //   }
    //  }, []);
