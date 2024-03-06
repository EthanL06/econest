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
  updateDoc,
  orderBy,
  startAfter,
  limit,
  onSnapshot
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import User from "@/types/user";
import EcoChat from "@/types/ecoChat";
import Message from "@/types/message";

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
         // it isnt running this line and saving it for some reason. fix that later
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

export async function sendMessage(chatId: string, messageContent: string, senderId: string): Promise<void> {
    if (!chatId || !messageContent || !senderId) {
       throw new Error("Chat ID, message content, and sender ID are required");
    }

    const sender = await getUserById(senderId);
   
    const chatDoc = doc(db, "ecoChats", chatId);
    const messageData = {
       messageId: Date.now().toString(), 
       message: messageContent,
       sender: senderId,
       time: new Date().toISOString(), 
       senderName: sender?.name,
       senderProfilePicture: sender?.profilePicture
    };
   
    try {
       await updateDoc(chatDoc, {
         chatMessages: arrayUnion(messageData),
       });
       console.log("Message sent successfully");
    } catch (error) {
       console.error("Error sending message:", error);
       throw error;
    }
}

export async function fetchMoreMessages(chatId: string, lastMessageTime: string | null): Promise<Message[]> {
    const chatDocRef = doc(db, "ecoChats", chatId);
    let messages: Message[] = [];

    try {
        const chatDocSnapshot = await getDoc(chatDocRef);
        if (chatDocSnapshot.exists()) {
            const chatData = chatDocSnapshot.data() as EcoChat;
            messages = chatData.chatMessages;

            if (lastMessageTime) {
                messages = messages.filter(message => message.time > lastMessageTime);
            }

            messages = messages.slice(-20);

            messages.reverse();

            for (let message of messages) {
                const user = await getUserById(message.sender);
                if (user) {
                    message.senderName = user.name;
                    message.senderProfilePicture = user.profilePicture;
                }
            }
        }
    } catch (error) {
        console.error("Error fetching more messages:", error);
        throw error;
    }

    return messages;
}

export function listenForNewMessages(chatId: string, onNewMessage: (message: Message) => void): () => void {
    const messagesCollection = collection(db, "ecoChats", chatId, "chatMessages");
    const q = query(messagesCollection, orderBy("time", "desc"), limit(20));
   
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
       const messages = querySnapshot.docs.map((doc) => doc.data() as Message);
       messages.forEach(onNewMessage);
    });
   
    return unsubscribe; 
}