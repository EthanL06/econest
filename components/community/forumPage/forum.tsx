'use client'
import React, { useState, useEffect } from 'react';
import Forum from "@/types/forum";
import ForumComment from "./forumComment"
import AddForumCommentForm from "./addForumCommentForm"
import User from "@/types/user"

interface ForumPageProps {
    user: User | null;
    forum: Forum | null;
}

const ForumPage: React.FC<ForumPageProps> = ({ user, forum }) => {
    const [comments, setComments] = useState<ForumComment[]>(forum?.forumComments || []);

    useEffect(() => {
        setComments(forum?.forumComments || []);
    }, [forum]);

    const updateComments = (newComment: ForumComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 bg-white p-4">
            {comments.map((comment) => (
                    <ForumComment key={comment.forumCommentId} user={user} comment={comment} />
                ))}
                <AddForumCommentForm user={user} forum={forum} onAddComment={updateComments} />
            </div>

            <div className="w-full md:w-1/4 p-4 space-y-5">
                <div className="gap-3 mt-4 md:mt-0">
                    <h2 className="text-xl font-bold mb-2">{forum?.forumTitle}</h2>
                    <p>{forum?.forumDescription}</p>
                </div>


                <div className="gap-3 mt-4 md:mt-0">
                    <h3 className="font-bold text-lg mb-2">Tags</h3>
                    {forum?.forumTags.map((tag, index) => (
                    <button key={index} className="bg-gray-200 text-gray-700 rounded-sm px-2 py-1 mr-2 mt-2 text-sm">{tag}</button>
                    ))} 
                </div>

                <div className="gap-3 mt-4 md:mt-0">
                    <h2 className="text-xl font-bold mb-2">About This Topic</h2>
                    {forum && <>
                        <p>{forum.forumLikes.length} likes</p>
                    <p>{forum.forumDislikes.length} dislikes</p>
                    <p>{forum.forumViews} views</p>
                    <p>{forum.forumComments.length} comments</p>

                    </>}
                  

                </div>
                <div className="gap-3 mt-4 md:mt-0">
                    <h2 className="text-xl font-bold mb-2">Promote the Ecosystem</h2>
                    <img src="./images/deadPenguin.jpeg" alt="Ecosystem" className="w-full h-auto mb-4 rounded-lg" />
                    <p>Join us in promoting a sustainable future. Every action counts!</p>
                    <a href="https://donate.oceanconservancy.org/page/136010/donate/1?ea.tracking.id=23HPXWJAXX&utm_medium=PaidSearch&utm_source=GooglePaid&utm_campaign=NonBranded&gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoW-Igm67aHWsowLDm-Q9tXI2vnq6cwkiCaee6_F2LTqz7RpLWu21iBxoCjY8QAvD_BwE" target="_blank" rel="noopener noreferrer" className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none mt-2 block flex justify-center">Donate Now</a>
                </div>

                <div className="gap-3 mt-4 md:mt-0">
                    <h2 className="text-xl font-bold mb-2">Special thanks to our sponsors</h2>
                    <img src="./images/sunPow.png" alt="Ecosystem" className="w-full h-auto mb-4 rounded-lg" />
                    <p>Ensuring a brighter and more eco-friendly future!</p>
                    <a href="https://us.sunpower.com/" target="_blank" rel="noopener noreferrer" className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none mt-2 block flex justify-center">Find Out More</a>
                </div>
            </div>
        </div>
    );
};

export default ForumPage;