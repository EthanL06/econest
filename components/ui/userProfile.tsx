import React, { useState, useEffect } from "react";
import User from "@/types/user";
import { getUserById } from "@config/routes";
import Image from "next/image";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import  { addFriend } from "@config/routes";
type UserProfileProps = {
 userId: string;
 showModal: boolean;
 setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserProfile: React.FC<UserProfileProps> = ({ userId, showModal, setShowModal }) => {
 const [user, setUser] = useState<User | null>(null);

 useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(userId);
      setUser(userData);
    };

    fetchUser();
 }, [userId]);

 const handleAddFriend = async () => {
  const currentUserID = localStorage.getItem('userID');
  if (!currentUserID) {
     console.error('Current user ID not found in local storage');
     return;
  }
 
  try {
     await addFriend(currentUserID, userId); 
     console.log('Friend added successfully');
     setShowModal(false);
  } catch (error) {
     console.error('Error adding friend:', error);
  }
 };

 const truncateName = (name: string | undefined) => {
    if (name) {
      return name.length > 20 ? `${name.substring(0, 20)}...` : name;
    }
    return null;
 };

 return (
    <Popover open={showModal} onOpenChange={setShowModal}>
      <PopoverTrigger asChild>
        <div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            {user && (
              <Image
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
                className="aspect-video rounded-lg sm:size-16"
              />
            )}

            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {truncateName(user?.name)}
              </h3>
              <p> {truncateName(user?.username)}</p>
              <div className="mt-2 flex justify-between">
                <div className="font-bold">
                 <p className="text-sm text-gray-500">EcoPoints</p>
                 <p className="text-sm text-gray-500 flex justify-center">{user?.ecoPoints}</p>
                </div>
                <div className="font-bold">
                 <p className="text-sm text-gray-500 ">Friends</p>
                 <p className="text-sm text-gray-500 flex justify-center">{user?.ecoFriends.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleAddFriend}
          >
            Add as Friend
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </PopoverContent>
    </Popover>
 );
};

export default UserProfile;