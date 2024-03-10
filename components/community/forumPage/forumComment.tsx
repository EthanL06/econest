import React, { useState, useEffect } from "react";
import ForumComment from "@/types/forumComment";
import User from "@/types/user";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { getUserById, updateCommentLikesDislikes } from "@config/routes";

type ForumCommentProps = {
  user: User | null;
  comment: ForumComment;
};

const ForumComment: React.FC<ForumCommentProps> = ({ user, comment }) => {
  const [commentUser, setCommentUser] = useState<User | null>(null);
  const [localComment, setLocalComment] = useState<ForumComment>(comment);
  const [userLiked, setUserLiked] = useState(localComment.forumCommentLikes.includes(user?.userID));
  const [userDisliked, setUserDisliked] = useState(localComment.forumCommentDislikes.includes(user?.userID));

  function convertTimeToEnglish(time: string) {
    const date = new Date(time);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(comment.forumCommenterId);
      setCommentUser(userData);
    };

    fetchUser();
  }, [comment.forumCommenterId]);

  const handleLike = async () => {
    try {
      if (user) {
        await updateCommentLikesDislikes(
          comment.forumId,
          comment.forumCommentId,
          user.userID,
          "like",
        );

        setLocalComment({
          ...localComment,
          forumCommentLikes: localComment.forumCommentLikes.includes(
            user.userID,
          )
            ? localComment.forumCommentLikes.filter((id) => id !== user.userID)
            : [...localComment.forumCommentLikes, user.userID],
        });
      }
      setUserLiked(localComment.forumCommentLikes.includes(user?.userID));

    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleDislike = async () => {
    try {
      if (user) {
        await updateCommentLikesDislikes(
          comment.forumId,
          comment.forumCommentId,
          user.userID,
          "dislike",
        );
        setLocalComment({
          ...localComment,
          forumCommentDislikes: localComment.forumCommentDislikes.includes(
            user.userID,
          )
            ? localComment.forumCommentDislikes.filter(
                (id) => id !== user.userID,
              )
            : [...localComment.forumCommentDislikes, user.userID],
        });
      }
      setUserDisliked(localComment.forumCommentDislikes.includes(user?.userID));

    } catch (error) {
      console.error("Error updating dislikes:", error);
    }
  };

  return (
    <div className="my-2 border-b border-gray-200 p-4">
      <div className="flex flex-row items-start space-x-3">
        {commentUser && (
          <div className="flex flex-col items-center">
            <img
              src={commentUser.profilePicture}
              alt={`${commentUser.name}'s profile`}
              className="mr-4 h-10 w-10 rounded-full"
            />
          </div>
        )}
        <div className="flex flex-grow flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="font-bold text-primary">{commentUser?.name}</p>
              <p className="ml-2 text-xs text-gray-500">
                {convertTimeToEnglish(localComment.forumCommentDate)}
              </p>
            </div>
          </div>
          <p>{localComment.forumCommentContent}</p>
          <div className="mt-2 flex items-center">
            <button
              onClick={handleLike}
              className={`flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1  ${userLiked ? 'bg-green-600 text-white hover:bg-green-700' : 'hover:bg-gray-100'}`}
            >
              <ThumbsUp size={16} /> {localComment.forumCommentLikes.length} Likes
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1 ml-2 ${userDisliked ? 'bg-green-600 text-white hover:bg-green-700' : 'hover:bg-gray-100'}`}
            >
              <ThumbsDown size={16} /> {localComment.forumCommentDislikes.length}{" "}
              Dislikes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumComment;
