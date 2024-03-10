
 
"use client"
import React, { useEffect, useState } from 'react';
import DiscussionItem from './discussionItem';
import Forum from "@/types/forum";
import User from "@/types/user";
import { fetchForums, addForum } from "@config/routes";

interface DiscussionsProps {
    user: User | null;
    setSelectedForum: (forim: Forum | null) => void;
}

const Discussions: React.FC<DiscussionsProps> = ({ user , setSelectedForum}) => {
 const [discussions, setDiscussions] = useState<Forum[]>([]);

 // this is here cuz im lazy. it makes a forum and adds it to the db

//  useEffect(() => {
//     const newForum: Forum = {
//         "forumId": "123",
//         "forumTitle": "Sample Forum Title",
//         "forumDescription": "This is a sample forum description.",
//         "forumAuthor": "John Doe",
//         "forumImage": "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
//         "forumDate": "2023-04-01",
//         "forumViews": "100",
//         "forumLikes": 50,
//         "forumDislikes": 10,
//         "forumComments": [],
//         "forumTags": ["tag1", "tag2", "tag3"]
//        };

//     const addForumToDatabase = async () => {
//       try {
//         await addForum(newForum);
//         console.log('Forum added to the database');
//       } catch (error) {
//         console.error('Failed to add forum:', error);
//       }
//     };

//     addForumToDatabase();
//  }, []); 


 useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedForums = await fetchForums();
        setDiscussions(fetchedForums);
      } catch (error) {
        console.error("Error fetching forums:", error);
      }
    };

    fetchData();
 }, []);

 return (
    <div>
      {discussions.map((discussion) => (
        <DiscussionItem key={discussion.forumId} discussion={discussion} setSelectedForum={setSelectedForum}/>
      ))}
    </div>
 );
};

export default Discussions;