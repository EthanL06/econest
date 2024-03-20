"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { getUserById } from "@/config/routes";
import { quicksand } from "@/lib/fonts";
import User from "@/types/user";
import { getAuth, signOut } from "firebase/auth";
import { Leaf } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const CommunityNavbar = (props: Props) => {
  const auth = getAuth();
  const [user, setUser] = React.useState<User | null>(null);

  const signOutUser = () => {
    localStorage.removeItem("userID");
    setUser(null);
    signOut(auth)
      .then(() => {
        toast({
          title: "Signed Out",
          description: "You have been signed out successfully",
          variant: "destructive",
        });
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  const goToChatPage = () => {
    window.location.href = "/chat";
  };

  useEffect(() => {
    // Get userid from local storage. If it exists, user is logged in
    const userID = localStorage.getItem("userID");
    if (userID) {
      getUserById(userID).then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <div className=" mt-2 flex w-full items-center justify-between sm:mt-1">
      <Link className="" href="/">
        <div className="group flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              "size-8 rotate-0 transform transition-all duration-300 group-hover:rotate-45"
            }
            viewBox="0 0 512 512"
          >
            <path
              opacity="1"
              fill="#5FA25E"
              d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
            />
          </svg>

          <div
            className={
              "overflow-hidden text-xl  font-bold transition-all duration-300 sm:text-2xl "
            }
          >
            <span className="">eco</span>
            <span className="text-[#5FA25E]">Nest</span>
          </div>
        </div>
      </Link>

      <div className="space-x-1.5">
        {!user && (
          <>
            <Link href="/login#join">
              <Button className="font-bold">Join our Community!</Button>
            </Link>

            <Link href="/login">
              <Button variant={"secondary"} className="font-bold">
                Login
              </Button>
            </Link>
          </>
        )}

        {user && (
          <div className="flex gap-x-2">
            <div className=" hidden gap-x-3 sm:flex">
              <Link
                className="flex cursor-pointer items-center text-center text-sm font-semibold"
                href="/"
              >
                Home
              </Link>
              <Link
                className="flex cursor-pointer items-center text-center text-sm font-semibold"
                href="/forum"
              >
                Forums
              </Link>
              <Link
                className="flex cursor-pointer items-center text-center text-sm font-semibold"
                href="/challenges"
              >
                Challenges
              </Link>
            </div>
            <div className="mr-2 hidden sm:block">
              <Separator className="h-full w-[2px]" />
            </div>
            <div className="flex items-center">
              <Leaf
                className="rounded-full stroke-[3px] text-primary outline outline-[3px] outline-offset-4"
                size={18}
              />
              <span className="ml-3 text-sm font-bold">
                {user.ecoPoints} Eco Points
              </span>
            </div>
            {/* <div>
              <Separator className="h-full w-[2px]" />
            </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="outline outline-2 outline-primary-foreground hover:cursor-pointer">
                  <AvatarImage
                    src={user.profilePicture}
                    alt={`${user.name}'s profile`}
                  />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                style={{
                  fontFamily: quicksand.style.fontFamily,
                }}
              >
                <DropdownMenuLabel className="text-center">
                  My Profile
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="align-center my-2 flex w-full flex-col justify-center gap-y-3 px-3">
                  <Button onClick={goToChatPage} className="bg-green-500 ">
                    Chat
                  </Button>
                  <Button onClick={signOutUser} variant={"destructive"}>
                    Sign Out
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityNavbar;
