"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import User from "@/types/user";

const SignInModal = () => {
  return (
    <Tabs defaultValue="new" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="new">New User</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent className="max-w-[347px]" value="new">
        <Card>
          <CardHeader>
            <CardTitle>Join ecoNest!</CardTitle>
            <CardDescription>
              We invite you to join the ecoCommunity!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-1">
            <SignIn />
          </CardContent>
          <CardFooter>
            <div className="text-[0.869rem]">
              Already have an account? Select{" "}
              <span className="font-semibold text-primary">Login</span> tab.
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent className="max-w-[347px]" value="login">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription>We are happy to see you again!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-1">
            <SignIn signInGoogleText="Login with Google" />
          </CardContent>
          <CardFooter>
            <div className="text-[0.869rem]">
              Don&apos;t have an account? Select{" "}
              <span className="font-semibold text-primary">New User</span> tab.
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

const SignIn = ({
  signInGoogleText = "Continue with Google",
  signInGuestText = "Sign In as Guest",
  redirect = "/community",
}) => {
  const router = useRouter();
  const { toast } = useToast();
  //   const { user, googleSignIn, anonymousSignIn } = useAuth()

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    const auth = getAuth();
    auth.languageCode = "en";

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential ? credential.accessToken : null;
        const user = result.user;

        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if(!userDoc.exists()) {
      
        const defaultUser: User = {
          userID: user.uid,
          username: user.email ?? "default@email.com",
          password: "testpassword",
          name: user.displayName ?? "Default Name",
          email: user.email ?? "default@email.com",
          profilePicture: user.photoURL ?? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
          ecoPoints: 0,
          ecoFriends: [],
          ecoCommunity: [],
          ecoChats: [],
          homeAddress: "123 Test Street, Test City, Test Country",
          electricalBill: 100,
          blogPosts: [],
          blogsRead: [],
          carbonFootprintInfo: {
            total: 0,
            transportation: 0,
            food: 0,
            housing: 0,
            goodsAndServices: 0,
            waste: 0,
          },
        };

        try {
          setDoc(doc(db, "users", defaultUser.userID), defaultUser).then(() => {
            localStorage.setItem("userID", user.uid);

            router.push(redirect);
            toast({
              title: `Sign in successful!`,
              description: "Welcome to ecoNest!",
              variant: "success",
              duration: 3000,
            });
          });
        } catch (error) {
          toast({
            title: `Error adding user!`,
            description: "Please try again.",
            variant: "destructive",
            duration: 3000,
          });

          console.error("Error adding user:", error);
        }

      } else {
        localStorage.setItem("userID", user.uid);
        router.push(redirect);
        toast({
          title: `Sign in successful!`,
          description: "Welcome to ecoNest!",
          variant: "success",
          duration: 3000,
        });
      }
      })
      .catch((error) => {
        toast({
          title: `Error signing in!`,
          description: "Please try again.",
          variant: "destructive",
          duration: 3000,
        });

        console.error("Error signing in:", error);
      });
  };

  const handleAnonymousSignIn = async () => {
    // try {
    //   await anonymousSignIn()
    //   router.push(redirect)
    //   toast({
    //     title: `Sign in successful!`,
    //     description: "Start studying now!",
    //     variant: "success",
    //     duration: 3000,
    //   })
    // } catch (error) {
    //   console.error(error)
    // }
  };

  const handleGuestSignIn = async () => {
    const userCredentials = await signInWithEmailAndPassword(
      getAuth(),
      "guest@gmail.com",
      "guest123",
    );

    const user = userCredentials.user;

    // Check if user exists in the database
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const defaultUser: User = {
        userID: user.uid,
        username: user.email ?? "default@email.com",
        password: "testpassword",
        name: user.displayName ?? "Default Name",
        email: user.email ?? "default@email.com",
        profilePicture: user.photoURL ?? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
        ecoPoints: 0,
        ecoFriends: [],
        ecoCommunity: [],
        ecoChats: [],
        homeAddress: "123 Test Street, Test City, Test Country",
        electricalBill: 100,
        blogPosts: [],
        blogsRead: [],
        carbonFootprintInfo: {
          total: 0,
          transportation: 0,
          food: 0,
          housing: 0,
          goodsAndServices: 0,
          waste: 0,
        },
      };

      try {
        setDoc(doc(db, "users", defaultUser.userID), defaultUser).then(() => {
          localStorage.setItem("userID", user.uid);
          console.log("User added successfully");
        });
      } catch (error) {
        toast({
          title: `Error adding user!`,
          description: "Please try again.",
          variant: "destructive",
          duration: 3000,
        });
        console.error("Error adding user:", error);
      }
    } else {
      localStorage.setItem("userID", user.uid);
    }

    toast({
      title: `Signed in with Guest account!`,
      description: "Welcome to ecoNest!",
      variant: "success",
      duration: 3000,
    });

    router.push(redirect);
  };

  return (
    <>
      <Button onClick={handleGoogleSignIn}>
        <svg
          className="-ml-1 mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        {signInGoogleText}
      </Button>
      <div className="relative flex w-full items-center py-1">
        <div className="grow border-t "></div>
        <span className="mx-2 shrink text-sm ">or</span>
        <div className="grow border-t "></div>
      </div>

      <Button onClick={handleGuestSignIn} variant={"ghost"}>
        {signInGuestText}
      </Button>
    </>
  );
};

export { SignIn };

export default SignInModal;
