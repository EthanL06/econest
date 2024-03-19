
import React, { useState } from "react";
import User from "@/types/user";
import Image from "next/image";
import UserProfile from '@/components/ui/userProfile'

interface LeaderboardSidebarItemProps {
  user: User;
}

const LeaderboardSidebarItem: React.FC<LeaderboardSidebarItemProps> = ({
  user,
}) => {

  const [showModal, setShowModal] = useState(false);


  return (

    <>
    <li className="mt-2 relative flex cursor-pointer items-center justify-between border-b border-gray-200 p-2 hover:bg-gray-100" onClick={() => setShowModal(true)}>
      {/* <img src={user.profilePicture} alt={user.name} className="w-10 h-10 rounded-full mr-4" /> */}
      <Image
        src={user.profilePicture}
        alt={user.name}
        width={40}
        height={40}
        className="mr-4 h-10 w-10 rounded-full"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAALAUAJ0BKkUBtgA+7Xa3VqmnJSOgKAEwHYlpbt5QA25jr3PkAWlsnIe+2TkPfbZaZv2vS38VWYuInNBCLmUEI9eSPEIYruahLQJdeRJA+7Rt+cwvscmRF+jMiWGOHoqwX6QGAjvxa8CMWgCBnpaE21UAYwGl6WbhO13EeHHGhLAR4PeUrAyPeZ5bPk0u6Fim7CM51Y8QhdMu6Flns7jXqiWyFkkoJnxdHNcVCtxIgAD+7XEDHg7D7bdnUxJHZqBQI1Nm7hAr7F77T6PzKewwpzMk5iQiC813JJyVsqQQc7yiMDEj/ovkH5754qdA5StVFHrHdZoQKS2R3AErOzGyCqB+5jDgJ5XXJ9hz3XvNn/Xd+jxrnWLOA8McuNLlVF0pNrY62t654c5gIkfvvwURzKizTuug5GxqbI0BIQE6eRjz5l99W5MUln5mF5HRBu3gW9RAAAA="
      />
      <div className="text-sm font-medium text-gray-900">{user.name}</div>
      <div className="text-sm text-gray-500">EcoPoints: {user.ecoPoints}</div>
    </li>
    {showModal && (
      <div className="z-10 top-0 left-0"> 
        <UserProfile userId={user.userID} showModal={showModal} setShowModal={setShowModal} />
      </div>
    )}

</>
  );
};

export default LeaderboardSidebarItem;
