import React from 'react';

const ChatPage: React.FC = () => {
 return (
    <div className="flex flex-col w-full md:w-full h-screen rounded-lg border border-gray-300">
      <header className="bg-green-700 text-white p-4 shadow-md rounded-lg">
        <h1 className="text-xl font-bold">Name of chat / friend</h1>
      </header>

      <div className="flex-grow overflow-y-auto p-4">
        <div className="flex items-start mb-4">
          <img src="/profile pic" alt="Profile Picture" className="w-10 h-10 rounded-full mr-2" />
          <div className="flex-grow">
            <div className="text-sm">
              <p className="font-bold">Username</p>
              <p className="text-gray-600">Message content...</p>
            </div>
            <p className="text-xs text-gray-400">12:34 PM</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 p-4">
        <input type="text" placeholder="Type a message..." className="w-full rounded-full p-2 border border-gray-300" />
      </div>
    </div>
 );
};

export default ChatPage;