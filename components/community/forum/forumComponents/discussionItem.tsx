import React from "react";
import Forum from "@/types/forum";
import Image from "next/image";
import AddForumCommentForm from "../../forumPage/addForumCommentForm";
import User from "@/types/user";
interface DiscussionItemProps {
 user: User | null;
 discussion: Forum;
 setSelectedForum: (forim: Forum | null) => void;
}

const DiscussionItem: React.FC<DiscussionItemProps> = ({ user, discussion, setSelectedForum }) => {

  const handleClick = () => {
    setSelectedForum(discussion); 
};
function convertTimeToEnglish(time: string) {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
  });
}

 return (
    <div className="flex flex-col md:flex-row items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer rounded-md" onClick={handleClick}>
      <div className="mb-4 w-full flex-shrink-0 sm:w-auto md:mb-0 md:mr-4">
        <Image
          src={discussion.forumImage}
          alt={discussion.forumTitle}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
          className="aspect-video rounded-lg sm:size-20"
        />
      </div>

      <div className="mt-4 w-full flex-wrap gap-2 sm:w-auto md:mt-0">
        <h2 className="text-lg font-bold">{discussion.forumTitle}</h2>
        <p className="text-sm font-black text-gray-600 text-primary">
          {discussion.forumAuthor}
        </p>
        <p className=" text-sm font-medium text-gray-600">
          {discussion.forumDescription}
        </p>

        <div className="mb-2 mt-1 flex flex-row flex-wrap items-center gap-3">
          {discussion.forumTags.map((tag, index) => (
            <div key={index}>
              <button className="shrink-0 rounded-sm bg-gray-200 px-2 py-1 text-xs text-gray-700">
                {tag}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs">
          <p className=" text-gray-500">{discussion.forumViews} Views</p>•
          <p className="text-gray-500">
            {discussion.forumComments.length} Comments
          </p>
          •<p className="text-gray-500">{convertTimeToEnglish(discussion.forumDate)}</p>
        </div>
      </div>
          
    </div>
  );
};

export default DiscussionItem;
