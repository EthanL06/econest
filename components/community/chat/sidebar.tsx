"use client";
import User from "@/types/user";
import EcoChat from "@/types/ecoChat";
import SidebarItem from "./sidebarItem";
import React, { useEffect, useState } from "react";
import {
  fetchChats,
  addFriend,
  fetchFriends,
  getUserById,
} from "@config/routes";
import NewChatModal from "./newChatModal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  user: User | null;
  selectedChat: EcoChat | null;
  setSelectedChat: (chat: EcoChat | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  user,
  selectedChat,
  setSelectedChat,
}) => {
  const [chats, setChats] = useState<EcoChat[]>([]);
  const [friends, setFriends] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChats, setFilteredChats] = useState<EcoChat[]>([]);

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

  useEffect(() => {
    const filterChats = async () => {
      const filtered = await Promise.all(
        chats.map(async (chat) => {
          const chatNameMatch = chat.chatName
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          const chatMembersMatch = (
            await Promise.all(
              chat.chatMembers.map(async (member) => {
                let friendUser = await getUserById(member);
                return friendUser?.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
              }),
            )
          ).some((result: boolean | undefined) => result);
          return chatNameMatch || chatMembersMatch ? chat : null;
        }),
      );
      setFilteredChats(
        filtered.filter((chat): chat is EcoChat => chat !== null),
      );
    };

    filterChats();
  }, [chats, searchQuery]);

  return (
    <div className="flex h-full w-full flex-col rounded-lg border border-gray-300 bg-white md:w-64 md:flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="mt-8 flex flex-col items-center justify-center p-4">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        <div className="flex items-center justify-between gap-x-1 pl-1 ">
          <input
            className="w-full flex-shrink flex-grow rounded-md border border-gray-300 p-2"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <a
            href="#"
            onClick={() => setIsModalOpen(true)}
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
                className: "bg-blue-500 hover:bg-blue-500/90",
              }),
            )}
          >
            New Chat
          </a>

          {isModalOpen && (
            <NewChatModal
              friends={friends}
              user={user}
              onClose={() => setIsModalOpen(false)}
            />
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
