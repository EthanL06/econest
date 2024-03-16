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

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(userId);
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  const handleAddFriend = async () => {
    const currentUserID = localStorage.getItem("userID");
    if (!currentUserID) {
      console.error("Current user ID not found in local storage");
      return;
    }

    try {
      await addFriend(currentUserID, userId);
      console.log("Friend added successfully");
    } catch (error) {
      console.error("Error adding friend:", error);
    }
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
                className="cursor-pointer rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mr-3 w-2/3">
            <div className="flex w-full">
              <div>
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <div className="flex items-center">
                  <Leaf className="mr-1 text-primary" size={18} />
                  <span className="text-sm font-semibold">
                    {user?.ecoPoints} Eco Points
                  </span>
                </div>
                {/* <button
                  className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700"
                  onClick={handleAddFriend}
                >
                  Add Friend
                </button> */}

                <Button
                  onClick={handleAddFriend}
                  className="mt-4 w-full font-semibold"
                >
                  Add Friend
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
