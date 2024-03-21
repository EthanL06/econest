import React, { useState, useEffect } from "react";
import ForumComment from "@/types/forumComment";
import User from "@/types/user";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { getUserById, updateCommentLikesDislikes } from "@config/routes";
import UserProfile from "@/components/ui/userProfile";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ForumCommentProps = {
  user: User | null;
  comment: ForumComment;
};

const ForumComment: React.FC<ForumCommentProps> = ({ user, comment }) => {
  const [commentUser, setCommentUser] = useState<User | null>(null);
  const [localComment, setLocalComment] = useState<ForumComment>(comment);
  const [userLiked, setUserLiked] = useState(
    user && localComment.forumCommentLikes.includes(user.userID),
  );
  const [userDisliked, setUserDisliked] = useState(
    user && localComment.forumCommentDislikes.includes(user.userID),
  );
  const [showModal, setShowModal] = useState(false);

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
        const newLikes = localComment.forumCommentLikes.includes(user.userID)
          ? localComment.forumCommentLikes.filter((id) => id !== user.userID)
          : [...localComment.forumCommentLikes, user.userID];

        await updateCommentLikesDislikes(
          comment.forumId,
          comment.forumCommentId,
          user.userID,
          "like",
        );

        setLocalComment({
          ...localComment,
          forumCommentLikes: newLikes,
        });
        setUserLiked(newLikes.includes(user.userID));
        console.log("updating it");
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleDislike = async () => {
    try {
      if (user) {
        const newDislikes = localComment.forumCommentDislikes.includes(
          user.userID,
        )
          ? localComment.forumCommentDislikes.filter((id) => id !== user.userID)
          : [...localComment.forumCommentDislikes, user.userID];

        await updateCommentLikesDislikes(
          comment.forumId,
          comment.forumCommentId,
          user.userID,
          "dislike",
        );

        setLocalComment({
          ...localComment,
          forumCommentDislikes: newDislikes,
        });
        setUserDisliked(newDislikes.includes(user.userID));
      }
    } catch (error) {
      console.error("Error updating dislikes:", error);
    }
  };

  function convertNewlinesToBreaks(text: string): JSX.Element {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
      />
    );
  }

  return (
    <div className="my-2 border-b border-gray-200 p-4">
      <div className="flex flex-row items-start space-x-3">
        {commentUser && (
          <div className="relative flex flex-col items-center"> 
                <Avatar className="outline outline-2 outline-primary-foreground hover:cursor-pointer hover:bg-gray-800"  
                  onClick={() => setShowModal(true)}
                  >
                  <AvatarImage
                    src={commentUser.profilePicture}
                    alt={`${commentUser.name}'s profile`}
                    className=" aspect-video rounded-full object-cover object-center"
                  />
                  <AvatarFallback>{commentUser.name}</AvatarFallback>
                </Avatar>
            {showModal && (
              <div className="absolute left-0 top-0 z-10 mt-10">
                <UserProfile
                  userId={commentUser.userID}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            )}
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
          {convertNewlinesToBreaks(localComment.forumCommentContent)}
          <div className="mt-4 flex items-center">
            <button
              onClick={handleLike}
              className={`flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1 ${
                userLiked
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <ThumbsUp size={16} /> {localComment.forumCommentLikes.length}{" "}
              Likes
            </button>
            <button
              onClick={handleDislike}
              className={`ml-2 flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1 ${
                userDisliked
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <ThumbsDown size={16} />{" "}
              {localComment.forumCommentDislikes.length} Dislikes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumComment;
