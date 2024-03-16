'use client'
import React, { useState, useEffect } from "react";
import User from "@/types/user";
import { createNewChat } from "@config/routes";

interface NewChatModalProps {
  friends: User[];
  onClose: () => void;
  user: User | null;
}

const NewChatModal: React.FC<NewChatModalProps> = ({ friends, onClose, user }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFriends, setSelectedFriends] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddFriend = (friend: User) => {
    if (selectedFriends.some((f) => f.userID === friend.userID)) {
      setSelectedFriends(
        selectedFriends.filter((f) => f.userID !== friend.userID),
      );
    } else {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  const handleRemoveFriend = (friend: User) => {
    setSelectedFriends(
      selectedFriends.filter((f) => f.userID !== friend.userID),
    );
  };

  const truncateName = (name: string) => {
    return name.length > 8 ? `${name.substring(0, 8)}...` : name;
  };

  const createChat = () => {
    if(user) {
      createNewChat(user, selectedFriends)
      .then(() => {
        console.log("Chat created successfully");
        onClose();
      })
      .catch((error) => {
        console.error("Failed to create chat:", error);
      });
    } 
    };

    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <div className="relative">
      <div className="absolute left-0 top-full m-2 mt-2 w-64 rounded-md border border-gray-300 bg-white shadow-lg">
        <div className="p-2">
          <h2 className="mb-2 text-xl font-bold">Start a New Chat</h2>
          <div className="relative mb-4 w-full">
            <input
              type="text"
              placeholder={selectedFriends.length > 0 ? `` : `Search...`}
              value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
              className={`px-2 py-${
                selectedFriends.length > 1 ? selectedFriends.length * 4 : 3
              } rounded-md border border-gray-300`}
            />
            <div className="absolute left-0 top-0 ml-2 mr-12 mt-2 flex flex-wrap">
              {selectedFriends.map((friend, index) => (
                <div
                  key={index}
                  className="mb-2 mr-2 flex items-center rounded-full bg-gray-200 px-2 py-1"
                >
                  <img
                    src={friend.profilePicture}
                    alt={friend.name}
                    className="mr-1 h-4 w-4 rounded-full"
                  />
                  <span>{truncateName(friend.name)}</span>
                  <button
                    onClick={() => handleRemoveFriend(friend)}
                    className="ml-2 text-xs text-gray-500 z-10"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <button className="ml-3 rounded-md border border-gray-300 px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white" onClick={createChat}>
              +
            </button>
          </div>
          <ul>
            {filteredFriends.map((friend, index) => (
              <li
                key={index}
                className="mb-2 flex cursor-pointer items-center rounded p-3 hover:bg-gray-100"
                onClick={() => handleAddFriend(friend)}
              >
                <img
                  src={friend.profilePicture}
                  alt={friend.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2">{truncateName(friend.name)}</span>
                <input
                  type="checkbox"
                  checked={selectedFriends.some(
                    (f) => f.userID === friend.userID,
                  )}
                  className="ml-auto rounded-md border border-gray-300 p-2 checked:bg-green-500 "
                />
              </li>
            ))}
          </ul>
          <button
            onClick={onClose}
            className="mt-4 rounded bg-green-600 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
