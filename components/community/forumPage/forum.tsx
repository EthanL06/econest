import React, { useState, useEffect } from "react";
import Forum from "@/types/forum";
import ForumComment from "./forumComment";
import AddForumCommentForm from "./addForumCommentForm";
import User from "@/types/user";
import { buttonVariants } from "@/components/ui/button";

interface ForumPageProps {
  user: User | null;
  forum: Forum | null;
}

const ForumPage: React.FC<ForumPageProps> = ({ user, forum }) => {
  const [comments, setComments] = useState<ForumComment[]>([]);

  useEffect(() => {
    const sortedComments = forum?.forumComments.sort(
      (a, b) =>
        new Date(b.forumCommentDate).getTime() -
        new Date(a.forumCommentDate).getTime(),
    );

    setComments(sortedComments || []);
  }, [forum]);

  const updateComments = (newComment: ForumComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full bg-white p-4 md:w-3/4">
        {comments.length > 0 &&
          comments.map((comment) => (
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

      <div className="mt-4 w-full gap-3 md:mt-0 md:w-1/4">
        <h2 className="mb-2 text-xl font-bold">About This Topic</h2>
        {forum && (
          <div>
            <p>{forum.forumLikes} likes</p>
            <p>{forum.forumDislikes} dislikes</p>
            <p>{forum.forumViews} views</p>
            <p>{forum.forumComments.length} comments</p>

            <div className="mt-4 gap-3 md:mt-0">
              <h3 className="mt-2 text-lg font-bold">Tags</h3>
              {forum?.forumTags.map((tag, index) => (
                <button
                  key={index}
                  className="mr-2 mt-2 rounded-sm bg-gray-200 px-2 py-1 text-sm text-gray-700"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-4 gap-3 md:mt-2">
              <h2 className="mb-2 text-xl font-bold">
                Special thanks to our sponsors
              </h2>
              <img
                src="/images/sunPow.png"
                alt="Ecosystem"
                className="mb-4 h-auto w-full rounded-lg"
              />
              <p>Ensuring a brighter and more eco-friendly future!</p>
              <a
                href="https://us.sunpower.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  className: "mt-2 w-full font-semibold",
                })}
              >
                Find Out More
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPage;
