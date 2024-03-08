"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@config/firebase';
import { doc, getDoc } from "firebase/firestore";  
import User from '@/types/user';  
import EcoChat from "@/types/ecoChat";
import ChatContainer from "@/components/community/chat/chatContainer"
import ForumContainer from "@/components/community/forum/forumContainer"
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
    <div className="">
        {/* <ChatContainer user={userData}/> */}
        <ForumContainer user={userData}/>

    </div>
 );
};

export default Community;