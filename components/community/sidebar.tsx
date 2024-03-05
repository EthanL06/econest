'use client'
import User from '@/types/user'
import EcoChat from '@/types/ecoChat'
import SidebarItem from './sidebarItem'
import React, {useEffect, useState} from 'react'
import { fetchChats, addFriend } from '@config/routes'

interface SidebarProps {
    user: User;
   }

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
 const [chats, setChats] = useState<EcoChat[]>([]);
 let IWANTTOKILLMYSELFWHYDOYOUDISPLAYTWICE = 0;

 useEffect(() => {
    if (user) {
       fetchChats(user).then((chats) => {
         setChats(chats);
         console.log(chats)
       }).catch((error) => {
         console.error("Failed to fetch chats:", error);
       });
    }
   }, [user]);

//    useEffect(() => {
    
//     if (user && IWANTTOKILLMYSELFWHYDOYOUDISPLAYTWICE < 1) {
//         IWANTTOKILLMYSELFWHYDOYOUDISPLAYTWICE++;
//         let currentUserID = "53BK7w3TTfUjIaHXezpaGBIersX2"; 
//         let friendID = "cLylZoeq65hIilcvYcnrWDG5sro2";
//        addFriend(currentUserID, friendID).then(() => {
//          console.log(user)
//        }).catch((error) => {
//          console.error("Failed to adding friend:", error);
//        });
//     }
//    }, []);

 const ecoChats: EcoChat[] = [
    {
       chatId: "chat1",
       chatName: "EcoFriends",
       chatMembers: ["user1", "user2"],
       chatMessages: [
         {
           messageId: "msg1",
           message: "Hello, how are you?",
           sender: "user1",
           time: "2023-04-01T10:00:00Z",
         },
         {
           messageId: "msg2",
           message: "I'm good, thanks! How about you?",
           sender: "user2",
           time: "2023-04-01T10:05:00Z",
         },
         // Add more messages as needed
       ],
    },
    // Add more chats as needed
   ];

 return (

<div className="flex flex-col w-full md:w-64 md:flex-shrink-0 h-screen rounded-lg border border-gray-300 bg-white">
 <div className="flex flex-col h-full">
    <div className="flex flex-col items-center justify-center p-4 mt-8">
      <h1 className="text-xl font-semibold">Messages</h1>
    </div>
    <div className="flex items-center p-2">
      <input className="flex-grow flex-shrink w-64 rounded-md border border-gray-300 p-2" type="text" placeholder="Search..." />
      <a href="#" className="mr-2 text-blue-500 hover:text-blue-700 font-semibold py-2 px-4">
        Chat
      </a>
    </div>
    <div className="flex flex-col overflow-y-auto">
      {chats.map((chat, index) => (
        <SidebarItem key={index} user={user} chat={chat} />
      ))}
    </div>
 </div>
</div>
 );
};

export default Sidebar;