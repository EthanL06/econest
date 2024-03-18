"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@config/firebase';
import { doc, getDoc } from "firebase/firestore";  
import User from '@/types/user';  
import EcoChat from "@/types/ecoChat";

import Sidebar from '@/components/community/chat/sidebar';
import ChatPage from '@/components/community/chat/chatPage';


interface ChatContainerProps {
    user: User | null;
  }

  const ChatContainer: React.FC<ChatContainerProps> = ({ user }) => {

    const [selectedChat, setSelectedChat] = useState<EcoChat | null>(null); 


 return (
  <div className="flex gap-2 h-full">
  {user && <Sidebar user={user} setSelectedChat={setSelectedChat} selectedChat={selectedChat} /> }
  {user && <ChatPage user={user} selectedChat={selectedChat} /> }
</div>
 );
};

export default ChatContainer;