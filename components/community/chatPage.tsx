"use client";
import React, { useState, useEffect, useRef } from "react";
import MessageComponent from "./chat/messageComponent";
import User from "@/types/user";
import EcoChat from "@/types/ecoChat";
import Message from "@/types/message";
import {
  sendMessage,
  fetchMoreMessages,
  listenForNewMessages,
} from "@config/routes";
import { MailIcon } from "@heroicons/react/outline";

interface ChatPageProps {
  user: User;
  selectedChat: EcoChat | null;
}

const ChatPage: React.FC<ChatPageProps> = ({ user, selectedChat }) => {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastMessageTime, setLastMessageTime] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Fetch initial messages
  useEffect(() => {
    console.log("Hello", selectedChat);
    if (selectedChat) {
      const pastTimestamp = null;
      console.log("fetching messages");
      fetchMoreMessages(selectedChat.chatId, pastTimestamp).then(
        (initialMessages) => {
          console.log("fetched", initialMessages);
          setMessages(initialMessages);
          if (initialMessages.length > 0) {
            setLastMessageTime(
              initialMessages[initialMessages.length - 1].time,
            );
          }
        },
      );
    }
  }, [selectedChat]);

  // Listen for new messages in real-time
  useEffect(() => {
    if (selectedChat) {
      const unsubscribe = listenForNewMessages(
        selectedChat.chatId,
        (newMessage) => {
          setMessages((prevMessages) => [newMessage, ...prevMessages]);
        },
      );

      return () => {
        unsubscribe();
      };
    }
  }, [selectedChat]);

  // Scroll event to load more messages
  useEffect(() => {
    const handleScroll: () => void = () => {
      if (
        chatContainerRef.current &&
        chatContainerRef.current.scrollTop === 0 &&
        lastMessageTime &&
        selectedChat
      ) {
        fetchMoreMessages(selectedChat.chatId, lastMessageTime).then(
          (newMessages) => {
            setMessages((prevMessages) => [...newMessages, ...prevMessages]);
            if (newMessages.length > 0) {
              setLastMessageTime(newMessages[newMessages.length - 1].time);
            }
          },
        );
      }
    };

    if (chatContainerRef.current) {
      chatContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedChat, lastMessageTime]);

  // send message route
  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected chat:", selectedChat);
    console.log("Message text:", messageText);
    console.log("User ID:", user.userID);
    if (selectedChat && messageText.trim() !== "") {
      try {
        await sendMessage(selectedChat.chatId, messageText, user.userID);
        setMessageText("");
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    } else {
      console.error(
        "Cannot send message: chat not selected or message is empty",
      );
    }
  };

  return (
    <div className="flex h-screen w-full flex-col rounded-lg border border-gray-300 md:w-full">
      <header className="rounded-lg bg-green-700 p-4 text-white shadow-md">
        <h1 className="text-xl font-bold">
          {selectedChat ? selectedChat.chatName : "Select a chat"}
        </h1>
      </header>

      <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <MessageComponent
              key={index}
              message={message}
              isMe={message.sender === user.userID}
            />
          ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow rounded-full border border-gray-300 p-2"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 rounded-full bg-green-500 p-2 text-white"
          >
            <MailIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
