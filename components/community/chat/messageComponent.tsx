import React from 'react';
import Image from 'next/image';
import Message from "@/types/message";

interface MessageProps {
 message: Message;
 isMe: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isMe }) => {
 function convertTimeToEnglish(time: string) {
    const date = new Date(time);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
 }


 const messageAlignment = isMe ? 'justify-end' : 'justify-start';
 const messageBackground = isMe ? 'bg-green-600 text-white' : 'bg-gray-200';


 return (
    <div className={`flex ${messageAlignment} mb-4`}>
      {!isMe && (
        <img src={message.senderProfilePicture} alt="Profile Picture" className="w-10 h-10 rounded-full mr-2" />
      )}
      <div className={`max-w-xs flex-grow ${messageBackground} p-3 rounded-lg`}>
        <div className="text-sm">
          <p className="font-bold">{message.senderName}</p>
          <p className="${ isMe ? 'text-white' : 'text-gray-600'}">{message.message}</p>
        </div>
        <p className=" text-sm ${ isMe ? 'text-white' : 'text-gray-00'}">{convertTimeToEnglish(message.time)}</p>
      </div>
      {isMe && (
        <img src={message.senderProfilePicture} alt="Profile Picture" className="w-10 h-10 rounded-full ml-2" />
      )}
    </div>
 );
};

export default Message;