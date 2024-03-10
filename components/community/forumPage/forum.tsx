import React from 'react';
import Forum from "@/types/forum";
import ForumComment from "./forumComment"
import AddForumCommentForm from "./addForumCommentForm"
import User from "@/types/user"

interface ForumPageProps {
    user: User | null;
    forum: Forum | null;
}

const ForumPage: React.FC<ForumPageProps> = ({ user, forum }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 bg-white p-4">
            {forum?.forumComments.map((comment) => (
                <ForumComment key={comment.forumCommentId} user={user} comment={comment} />
            ))}
                  <AddForumCommentForm user={user} forum={forum} />
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
                    <p>{forum.forumDislikes.length} likes</p>
                    <p>{forum.forumViews} views</p>
                    <p>{forum.forumComments.length} comments</p>

                    </>}
                  

                </div>
            </div>
        </div>
    );
};

export default ForumPage;