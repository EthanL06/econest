import React, { useState } from 'react';
import { addForumComment } from '@config/routes'; 
import ForumComment from '@/types/forumComment'; 
import User from '@/types/user';
import Forum from '@/types/forum';

interface AddForumCommentProps {
    user: User | null;
    forum: Forum | null;
}

const AddForumCommentForm: React.FC<AddForumCommentProps> = ({ user, forum }) => {
    const [comment, setComment] = useState<ForumComment>({
        forumId: forum?.forumId || '', 
        forumCommenterId: user?.userID || '', 
        forumCommentId: '',
        forumCommentAuthor: user?.name || '',
        forumCommentDate: '', 
        forumCommentContent: '',
        forumCommentLikes: [],
        forumCommentDislikes: [],
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment({
            ...comment,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
           console.log(forum?.forumId)
            await addForumComment(comment);
            setComment({
                ...comment,
                forumCommentContent: '',
            });
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className=" p-4 rounded-lg border mt-4">
            <div className="flex items-center mb-4">
                <img src={user?.profilePicture || 'https://via.placeholder.com/40'} alt="User Profile" className="rounded-full w-10 h-10 mr-4" />
                <h3 className="text-lg font-semibold">{user?.name}</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label>
                    Comment:
                    <textarea name="forumCommentContent" value={comment.forumCommentContent} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 whitespace-pre-wrap" />
                </label>
                <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none">Add Comment</button>
            </form>
        </div>
    );
};

export default AddForumCommentForm;