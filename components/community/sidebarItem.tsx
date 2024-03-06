"use client"
import React, { useEffect, useState } from 'react';
import User from '@/types/user';
import EcoChat from '@/types/ecoChat';
import { getUserById } from '@config/routes'; 

interface SidebarItemProps {
    user: User;
    chat: EcoChat;
    setSelectedChat: (chat: EcoChat | null) => void; 
}

const SidebarItem: React.FC<SidebarItemProps> = ({ user, chat, setSelectedChat }) => {
    const [friend, setFriend] = useState<User | null>(null);

    useEffect(() => {
        const friendID = chat.chatMembers[0] === user.userID ? chat.chatMembers[1] : chat.chatMembers[0];
        if (friendID) {
            getUserById(friendID).then(setFriend);
        }
    }, [chat, user.userID]);

    const handleClick = () => {
        setSelectedChat(chat); 
    };

    return (
        <div className="flex items-center p-4 hover:bg-gray-100 rounded-lg shadow-md transition-colors duration-200 overflow-hidden cursor-pointer" onClick={handleClick}>
            {friend && <img src={friend.profilePicture} alt="Friend Avatar" className="w-10 h-10 rounded-full" />}
            <div className="ml-4">
                <h2 className="text-sm font-medium">{friend ? friend.name : 'Loading...'}</h2>
                <p className="text-xs text-gray-500">{chat.chatName}</p>
            </div>
        </div>
    );
};

export default SidebarItem;