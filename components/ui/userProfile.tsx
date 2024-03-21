import React, { useState, useEffect } from "react";
import User from "@/types/user";
import { getUserById } from "@config/routes";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addFriend } from "@config/routes";
import { Button } from "./button";
import { cn } from "@/lib/utils";
type UserProfileProps = {
  userId: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  showModal,
  setShowModal,
}) => {
  const [user, setUser] = useState<User | null>(null);
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
        console.error("Current user ID not found in local storage");
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
    
    const currentUser = await getUserById(currentUserID);
    if(currentUser) {
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
window.location.href = "/chat"
}

  const truncateName = (name: string | undefined) => {
    if (name) {
      return name.length > 20 ? `${name.substring(0, 20)}...` : name;
    }
    return null;
  };

  return (
    <Popover open={showModal} onOpenChange={setShowModal}>
      <PopoverTrigger asChild>
        <div></div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="">
          <div className="flex items-center space-x-4">
            {user && (
              <Image
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
                className="aspect-video rounded-lg object-cover sm:size-16"
              />
            )}

            <div className="w-full">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {truncateName(user?.name)}
              </h3>

              <div className="mt-2 flex  gap-x-2">
                <div className="">
                  <p className="text-sm font-semibold text-primary">
                    Eco Points
                  </p>
                  <p className="flex justify-center text-sm font-semibold ">
                    {user?.ecoPoints}
                  </p>
                </div>
                <div className="">
                  <p className="text-sm font-semibold text-primary">Friends</p>
                  <p className="flex justify-center text-sm font-semibold">
                    {user?.ecoFriends.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 px-0 py-4">
          <Button
            onClick={isFriend ? goToChatPage : handleAddFriend}
            className={cn("w-full")}
          >
            {isFriend ? "Chat Now" : "Add Friend"}
          </Button>

          <Button
            className="w-full"
            variant={"outline"}
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
