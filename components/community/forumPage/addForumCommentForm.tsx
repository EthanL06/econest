import React, { useState } from "react";
import { addForumComment } from "@config/routes";
import ForumComment from "@/types/forumComment";
import User from "@/types/user";
import Forum from "@/types/forum";
import { Button } from "@/components/ui/button";

interface AddForumCommentProps {
  user: User | null;
  forum: Forum | null;
  onAddComment: (comment: ForumComment) => void;
}

const AddForumCommentForm: React.FC<AddForumCommentProps> = ({
  user,
  forum,
  onAddComment,
}) => {
  const [comment, setComment] = useState<ForumComment>({
    forumId: forum?.forumId || "",
    forumCommenterId: user?.userID || "",
    forumCommentId: "",
    forumCommentAuthor: user?.name || "",
    forumCommentDate: "",
    forumCommentContent: "",
    forumCommentLikes: [],
    forumCommentDislikes: [],
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newComment = await addForumComment(comment);
      setComment({
        ...comment,
        forumCommentContent: "",
      });
      onAddComment(newComment);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className=" mt-4 rounded-lg border p-4">
      <div className="mb-4 flex items-center">
        <img
          src={user?.profilePicture || "https://via.placeholder.com/40"}
          alt="User Profile"
          className="mr-4 h-10 w-10 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold">{user?.name}</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>
          Comment:
          <textarea
            name="forumCommentContent"
            value={comment.forumCommentContent}
            onChange={handleChange}
            required
            className="w-full whitespace-pre-wrap rounded-lg border border-gray-300 p-2 focus:border-green-500 focus:outline-none"
          />
        </label>

        <Button
          type="submit"
          variant={"default"}
          className="w-full font-semibold"
        >
          Add Comment
        </Button>
      </form>
    </div>
  );
};

export default AddForumCommentForm;
