import React, { useState, useEffect } from "react";
import ForumComment from "@/types/forumComment";
import User from "@/types/user";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { getUserById, updateCommentLikesDislikes } from "@config/routes";
import UserProfile from '@/components/ui/userProfile'
import Image from 'next/image'

type ForumCommentProps = {
  user: User | null;
  comment: ForumComment;
};

const ForumComment: React.FC<ForumCommentProps> = ({ user, comment }) => {
  const [commentUser, setCommentUser] = useState<User | null>(null);
  const [localComment, setLocalComment] = useState<ForumComment>(comment);
  const [userLiked, setUserLiked] = useState(user && localComment.forumCommentLikes.includes(user.userID));
  const [userDisliked, setUserDisliked] = useState(user && localComment.forumCommentDislikes.includes(user.userID));
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
        setUserLiked(localComment.forumCommentLikes.includes(user.userID));
      }
        

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
        setUserDisliked(localComment.forumCommentDislikes.includes(user.userID));
      }
      

    } catch (error) {
      console.error("Error updating dislikes:", error);
    }
  };


  return (
    <div className="my-2 border-b border-gray-200 p-4">
      <div className="flex flex-row items-start space-x-3">
        {commentUser && (
          <div className="relative flex flex-col items-center"> 
                <Image
    src={commentUser.profilePicture}
    alt={`${commentUser.name}'s profile`}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
        className="aspect-video mr-4 h-12 w-12 rounded-full cursor-pointer"
        onClick={() => setShowModal(true)}
    />
            {showModal && (
              <div className="absolute z-10 top-0 left-0 mt-10"> 
                <UserProfile userId={commentUser.userID} showModal={showModal} setShowModal={setShowModal} />
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
          <p>{localComment.forumCommentContent}</p>
          <div className="mt-4 flex items-center">
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
