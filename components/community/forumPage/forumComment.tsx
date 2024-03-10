import React, { useState, useEffect } from 'react';
import ForumComment from "@/types/forumComment";
import { getUserById } from "@config/routes"; 
import User from "@/types/user";

type ForumCommentProps = {
    comment: ForumComment;
};

const ForumComment: React.FC<ForumCommentProps> = ({ comment }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserById(comment.forumCommenterId);
            setUser(userData);
        };

        fetchUser();
    }, [comment.forumCommenterId]);

    return (
        <div className="p-4 my-2 border-b border-gray-200">
            <div className="flex flex-row items-start space-x-3">

            <div className="flex items-start space-x-3">
                
                {user && (
                    <div className="">
                        <img src={user.profilePicture} alt={`${user.name}'s profile`} className="w-60 h-24 rounded-full" />
                        <p className="font-bold">{user.name}</p>
                    </div>
                )}
            <div>
                    
                    <p className="font-bold">{comment.forumCommentTitle}</p>
                    <p>{comment.forumCommentContent}</p>
                    <p className="text-sm text-gray-500">{comment.forumCommentDate}</p>
                    <div className="flex items-center">
                        <button className="text-blue-500 hover:text-blue-700">
                            {comment.forumCommentLikes} Likes
                        </button>
                        <button className="text-red-500 hover:text-red-700 ml-4">
                            {comment.forumCommentDislikes} Dislikes
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ForumComment;