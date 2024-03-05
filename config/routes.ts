import { db } from "@config/firebase";
import app from "@config/firebase";

import firebase from "firebase/app";
import {
  collection,
  query,
  where,
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import User from "@/types/user";
import EcoChat from "@/types/ecoChat";

export async function getUserById(userID: string): Promise<User | null> {
  if (!userID) {
    return Promise.reject(new Error("User ID is required"));
  }

  const userDoc = doc(db, "users", userID);
  return getDoc(userDoc)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data() as User;
        return userData;
      } else {
        console.log("No such document!");
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      return null;
    });
}

export async function fetchChats(user: User): Promise<EcoChat[]> {
    if (!user) {
       throw new Error("User object with id is required");
    }
   
    const chatsCollection = collection(db, "ecoChats");
    const q = query(chatsCollection, where("chatMembers", "array-contains", user.userID));
   
    try {
       const querySnapshot = await getDocs(q);
       const chatsData = querySnapshot.docs.map((doc) => doc.data() as EcoChat);
       return chatsData;
    } catch (error) {
       console.error("Error fetching chats:", error);
       return [];
    }
}

export async function addFriend(
    currentUserID: string,
    friendID: string,
   ): Promise<void> {
    if (!currentUserID || !friendID) {
       return Promise.reject(new Error("Both user IDs are required"));
    }
   
    // add friend to user
    const currentUserDoc = doc(db, "users", currentUserID);
    const updateCurrentUserPromise = updateDoc(currentUserDoc, {
       ecoFriends: arrayUnion(friendID),
    })
       .then(() => {
         console.log("Friend added successfully to current user");
       })
       .catch((error) => {
         console.error("Error adding friend to current user:", error);
         throw error;
       });
   
    // add u to friend
    const friendDoc = doc(db, "users", friendID);
    const updateFriendPromise = updateDoc(friendDoc, {
       ecoFriends: arrayUnion(currentUserID),
    })
       .then(() => {
         console.log("Current user added successfully to friend");
       })
       .catch((error) => {
         console.error("Error adding current user to friend:", error);
         throw error;
       });
   
    // create chat
    const ecoChatCollection = collection(db, "ecoChats");
    const chatData: EcoChat = {
       chatId: "",
       chatName: "Friend Chat",
       chatMembers: [currentUserID, friendID],
       chatMessages: [],
    };
   
    const createChatPromise = addDoc(ecoChatCollection, chatData)
       .then((docRef) => {
         console.log("EcoChat created with ID:", docRef.id);
         chatData.chatId = docRef.id;
         return Promise.all([
           updateDoc(currentUserDoc, {
             ecoChats: arrayUnion(docRef.id),
           }).then(() => {
             console.log("Chat ID added to current user");
           }).catch((error) => {
             console.error("Error adding chat ID to current user:", error);
             throw error;
           }),
           updateDoc(friendDoc, {
             ecoChats: arrayUnion(docRef.id),
           }).then(() => {
             console.log("Chat ID added to friend");
           }).catch((error) => {
             console.error("Error adding chat ID to friend:", error);
             throw error;
           }),
         ]);
       })
       .catch((error) => {
         console.error("Error creating EcoChat:", error);
         throw error;
       });
   
    return Promise.all([
       updateCurrentUserPromise,
       updateFriendPromise,
       createChatPromise,
    ]).then(() => {
       console.log("All operations completed successfully");
    });
}
