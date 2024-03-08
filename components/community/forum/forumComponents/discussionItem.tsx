import React from 'react';
import Forum from "@/types/forum";
import Image from 'next/image';

interface DiscussionItemProps {
 discussion: Forum;
}

const DiscussionItem: React.FC<DiscussionItemProps> = ({ discussion }) => {
 return (
    <div className="flex flex-col md:flex-row items-center p-4 border-b border-gray-200">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <img src={discussion.forumImage} alt={discussion.forumTitle} className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex-wrap gap-2 mt-4 md:mt-0">
      <h2 className="text-lg font-semibold">{discussion.forumTitle}</h2>
      <p className="text-gray-600">{discussion.forumDescription}</p>

      <div className="flex flex-row gap-3 mt-2 md:mt-2">
      {discussion.forumTags.map((tag, index) => (
          <button key={index} className="bg-gray-200 text-gray-700 rounded-sm px-2 py-1 text-sm">{tag}</button>
        ))} 
        <p className="text-gray-500">Written By: {discussion.forumAuthor}</p>
        <p className="text-gray-500">{discussion.forumViews} Views</p>
        <p className="text-gray-500">{discussion.forumComments.length} Comments</p>
      </div>

      <p className="text-gray-500 mt-1">{discussion.forumDate}</p>
     
      </div>
    </div>
 );
};

export default DiscussionItem;