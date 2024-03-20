"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getUserById } from "@config/routes";
import User from "@/types/user";
import { addFriend } from "@config/routes";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

type AddFriendCardProps = {
  userId: string;
};

const AddFriendCard: React.FC<AddFriendCardProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>();
  const [isFriend, setIsFriend] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(userId);
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const checkIfFriend = async () => {
      const currentUserID = localStorage.getItem("userID");
      if (!currentUserID) {
        // console.error("Current user ID not found in local storage");
        return;
      }
      const currentUser = await getUserById(currentUserID);
      if (currentUser) {
        const friends = currentUser.ecoFriends;
        setIsFriend(friends.includes(userId));
      }
    };

    checkIfFriend();
  }, [user]);

  const handleAddFriend = async () => {
    const currentUserID = localStorage.getItem("userID");
    if (!currentUserID) {
      console.error("Current user ID not found in local storage");
      return;
    }

    try {
      await addFriend(currentUserID, userId);
      console.log("Friend added successfully");
      setIsFriend(true);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  const goToChatPage = () => {
    window.location.href = "/chat";
  };

  return (
    <div className="mx-auto flex w-full max-w-md space-x-5 rounded-lg bg-white p-4 shadow-md">
      {user && (
        <>
          <div className="flex w-1/3 items-center ">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
                width={96}
                height={96}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
                className="size-[6rem] cursor-pointer rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mr-3 w-2/3">
            <div className="flex justify-end">
              <div>
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <div className="mt-2 flex items-center">
                  <span>{user?.ecoPoints} Eco Points</span>
                </div>
                <Button
                  onClick={isFriend ? goToChatPage : handleAddFriend}
                  className={`mt-4 w-full font-semibold ${
                    isFriend ? "bg-green-700 hover:bg-green-600" : ""
                  }`}
                >
                  {isFriend ? "Chat Now" : "Add Friend"}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddFriendCard;
