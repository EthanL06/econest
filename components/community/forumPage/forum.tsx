"use client";
import React, { useState, useEffect } from "react";
import Forum from "@/types/forum";
import ForumComment from "./forumComment";
import AddForumCommentForm from "./addForumCommentForm";
import User from "@/types/user";

interface ForumPageProps {
  user: User | null;
  forum: Forum | null;
}

const ForumPage: React.FC<ForumPageProps> = ({ user, forum }) => {
  const [comments, setComments] = useState<ForumComment[]>(
    forum?.forumComments || [],
  );

  useEffect(() => {
    // Sort the forum comments by date
    const sortedComments = forum?.forumComments.sort((a, b) => {
      return (
        new Date(a.forumCommentDate).getTime() -
        new Date(b.forumCommentDate).getTime()
      );
    });

    setComments(sortedComments || []);
  }, [forum]);

  const updateComments = (newComment: ForumComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full bg-white p-4 md:w-3/4">
        {comments.map((comment) => (
          <ForumComment
            key={comment.forumCommentId}
            user={user}
            comment={comment}
          />
        ))}
        <AddForumCommentForm
          user={user}
          forum={forum}
          onAddComment={updateComments}
        />
      </div>

      <div className="w-full space-y-5 p-4 md:w-1/4">
        <div className="mt-4 gap-3 md:mt-0">
          <h2 className="mb-2 text-xl font-bold">{forum?.forumTitle}</h2>
          <p>{forum?.forumDescription}</p>
        </div>

        <div className="mt-4 gap-3 md:mt-0">
          <h3 className="mb-2 text-lg font-bold">Tags</h3>
          {forum?.forumTags.map((tag, index) => (
            <button
              key={index}
              className="mr-2 mt-2 rounded-sm bg-gray-200 px-2 py-1 text-sm text-gray-700"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-4 gap-3 md:mt-0">
          <h2 className="mb-2 text-xl font-bold">About This Topic</h2>
          {forum && (
            <>
              <p>{forum.forumLikes.length} likes</p>
              <p>{forum.forumDislikes.length} dislikes</p>
              <p>{forum.forumViews} views</p>
              <p>{forum.forumComments.length} comments</p>
            </>
          )}
        </div>
        <div className="mt-4 gap-3 md:mt-0">
          <h2 className="mb-2 text-xl font-bold">Promote the Ecosystem</h2>
          <img
            src="./images/deadPenguin.jpeg"
            alt="Ecosystem"
            className="mb-4 h-auto w-full rounded-lg"
          />
          <p>Join us in promoting a sustainable future. Every action counts!</p>
          <a
            href="https://donate.oceanconservancy.org/page/136010/donate/1?ea.tracking.id=23HPXWJAXX&utm_medium=PaidSearch&utm_source=GooglePaid&utm_campaign=NonBranded&gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoW-Igm67aHWsowLDm-Q9tXI2vnq6cwkiCaee6_F2LTqz7RpLWu21iBxoCjY8QAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block flex w-full justify-center rounded-lg bg-green-600 p-2 text-white hover:bg-green-700 focus:outline-none"
          >
            Donate Now
          </a>
        </div>

        <div className="mt-4 gap-3 md:mt-0">
          <h2 className="mb-2 text-xl font-bold">
            Special thanks to our sponsors
          </h2>
          <img
            src="./images/sunPow.png"
            alt="Ecosystem"
            className="mb-4 h-auto w-full rounded-lg"
          />
          <p>Ensuring a brighter and more eco-friendly future!</p>
          <a
            href="https://us.sunpower.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block flex w-full justify-center rounded-lg bg-green-600 p-2 text-white hover:bg-green-700 focus:outline-none"
          >
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
