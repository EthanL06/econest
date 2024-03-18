"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@config/firebase';
import { doc, getDoc } from "firebase/firestore";  
import User from '@/types/user';  
import EcoChat from "@/types/ecoChat";
import Forum from "@/types/forum";
import ChatContainer from "@/components/community/chat/chatContainer"
import ForumContainer from "@/components/community/forum/forumContainer"
import ForumPage from "@/components/community/forumPage/forum"
import EcoChallengeContainer from "@/components/community/ecoChallenges/ecoChallengeContainer"
import { getUserById } from '@config/routes';

const Chat = () => {
 const [userData, setUserData] = useState<User | null>(null);
 const [selectedChat, setSelectedChat] = useState<EcoChat | null>(null); 
 const userID = typeof window !== 'undefined' ? localStorage.getItem('userID') : null;
 const [selectedForum, setSelectedForum] = useState<Forum | null>(null);

  useEffect(() => {
    if (userID) {
      getUserById(userID).then((data) => {
        setUserData(data);
      });
    }
  }, [userID]);

  return (
    <div className="flex-grow overflow-auto">
      <ChatContainer user={userData}/>
    </div>
  );
};

export default Chat;


