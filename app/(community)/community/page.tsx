"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@config/firebase';
import { doc, getDoc } from "firebase/firestore";  
import User from '@/types/user';  
import EcoChat from "@/types/ecoChat";

import Sidebar from '@/components/community/sidebar';
import ChatPage from '@/components/community/chatPage';
import { getUserById } from '@config/routes';

const Community = () => {
 const [userData, setUserData] = useState<User | null>(null);
 const [selectedChat, setSelectedChat] = useState<EcoChat | null>(null); 
 const userID = typeof window !== 'undefined' ? localStorage.getItem('userID') : null;

 useEffect(() => {
    if (userID) {
      getUserById(userID).then((data) => {
        setUserData(data);
      });
    }
 }, [userID]);

 return (
    <div className="flex gap-2">
      {userData && <Sidebar user={userData} setSelectedChat={setSelectedChat} /> }
      {userData && <ChatPage user={userData} selectedChat={selectedChat} /> }
    </div>
 );
};

export default Community;