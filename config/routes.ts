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
  onSnapshot,
  arrayRemove
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
import Forum from "@/types/forum";
import ForumComment from "@/types/forumComment";

//GENERAL ROUTES BELOW

// works
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

// works
export async function fetchFriends(user: User): Promise<User[]> {
  if (!user) {
    throw new Error("User object with id is required");
  }
  const userDocRef = doc(db, "users", user.userID);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    throw new Error("User document does not exist");
  }

  const userData = userDocSnap.data();

  const friendsIDs = userData.ecoFriends;

  console.log(friendsIDs);

  const friendsDataPromises = friendsIDs.map(async (friendID: string) => {
    const friendDocRef = doc(db, "users", friendID);
    const friendDocSnap = await getDoc(friendDocRef);

    if (friendDocSnap.exists()) {
      return friendDocSnap.data() as User;
    } else {
      console.error(`Friend document with ID ${friendID} does not exist`);
      return null;
    }
  });

  const friendsData = await Promise.all(friendsDataPromises);
  console.log(friendsData);
  return friendsData.filter((friend) => friend !== null) as User[];
}

// kinda bad
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
    chatName: "Direct Message",
    chatMembers: [currentUserID, friendID],
    chatMessages: [],
  };

  const createChatPromise = addDoc(ecoChatCollection, chatData)
    .then((docRef) => {
      console.log("EcoChat created with ID:", docRef.id);
      // it isnt running this line and saving it for some reason. fix that later
      chatData.chatId = docRef.id;
      
      return Promise.all([
        updateDoc(doc(ecoChatCollection, docRef.id), {
          chatId: docRef.id,
        }),
        updateDoc(currentUserDoc, {
          ecoChats: arrayUnion(docRef.id),
        })
          .then(() => {
            console.log("Chat ID added to current user");
          })
          .catch((error) => {
            console.error("Error adding chat ID to current user:", error);
            throw error;
          }),
        updateDoc(friendDoc, {
          ecoChats: arrayUnion(docRef.id),
        })
          .then(() => {
            console.log("Chat ID added to friend");
          })
          .catch((error) => {
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


export async function addPoints(user: string, points: number): Promise<void> {
  if (!user || points === 0) {
    throw new Error("User object and points are required");
  }

  const userDocRef = doc(db, "users", user);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    throw new Error("User document does not exist");
  }

  const userData = userDocSnap.data() as User;
  const updatedPoints = userData.ecoPoints + points;

  try {
    await updateDoc(userDocRef, {
      ecoPoints: updatedPoints,
    });
    console.log("Points added successfully");
  } catch (error) {
    console.error("Error adding points:", error);
    throw error;
  }
}



// CHAT ROUTES BELOW

// works
export async function fetchChats(user: User): Promise<EcoChat[]> {
  if (!user) {
    throw new Error("User object with id is required");
  }

  const chatsCollection = collection(db, "ecoChats");
  const q = query(
    chatsCollection,
    where("chatMembers", "array-contains", user.userID),
  );

  try {
    const querySnapshot = await getDocs(q);
    const chatsData = querySnapshot.docs.map((doc) => doc.data() as EcoChat);
    return chatsData;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
}

// works. I want to change the addFriend method to call this instead of do the logic on its own cuz its broken there
export async function createNewChat(
  user: User,
  selectedFriends: User[],
): Promise<void> {
  if (!user || !selectedFriends || selectedFriends.length === 0) {
    return Promise.reject(new Error("User and selected friends are required"));
  }

  const chatMembers = [
    user.userID,
    ...selectedFriends.map((friend) => friend.userID),
  ];
  const chatName =
    selectedFriends.length === 1 ? selectedFriends[0].name : "Group Chat";

  const ecoChatCollection = collection(db, "ecoChats");
  const chatData: EcoChat = {
    chatId: "",
    chatName,
    chatMembers,
    chatMessages: [],
  };

  try {
    const docRef = await addDoc(ecoChatCollection, chatData);
    console.log("EcoChat created with ID:", docRef.id);

    await updateDoc(doc(ecoChatCollection, docRef.id), {
      chatId: docRef.id,
    });

    console.log("Chat ID updated in the system");

    const userDocRef = doc(db, "users", user.userID);
    await updateDoc(userDocRef, {
      ecoChats: arrayUnion(docRef.id),
    });

    console.log("Chat ID added to current user");
  } catch (error) {
    console.error("Error creating EcoChat:", error);
    throw error;
  }
}

// works
export async function sendMessage(
  chatId: string,
  messageContent: string,
  senderId: string,
): Promise<void> {
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
    senderProfilePicture: sender?.profilePicture,
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

// the limit thing isnt working and im lazy to optimize it so yeah i think ill just get rid of the slice part and hope they dont send too many messages to make it load slowly
export async function fetchMoreMessages(
  chatId: string,
  lastMessageTime: string | null,
  limit: number = 20,
): Promise<Message[]> {
  console.log(chatId);

  const chatDocRef = doc(db, "ecoChats", chatId);
  let messages: Message[] = [];
  try {
    const chatDocSnapshot = await getDoc(chatDocRef);
    if (chatDocSnapshot.exists()) {
      const chatData = chatDocSnapshot.data() as EcoChat;
      messages = chatData.chatMessages;
      //  messages = messages.slice(-limit);
    }
  } catch (error) {
    console.error("Error fetching more messages:", error);
    throw error;
  }

  return messages;
}

// works
export function listenForNewMessages(
  chatId: string,
  onNewMessage: (message: Message) => void,
): () => void {
  const chatDocRef = doc(db, "ecoChats", chatId);
  let lastMessageId = null as string | null;

  const unsubscribe = onSnapshot(chatDocRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const chatData = docSnapshot.data() as EcoChat;
      const messages = chatData.chatMessages.map(
        (messageData) => messageData as Message,
      );

      messages.forEach((newMessage) => {
        if (lastMessageId === null || newMessage.messageId !== lastMessageId) {
          onNewMessage(newMessage);
          lastMessageId = newMessage.messageId;
        }
      });
    }
  });

  return unsubscribe;
}

// FORUM ROUTES BELOW

export async function fetchForums(): Promise<Forum[]> {
  const forumsCollection = collection(db, "forums");
  try {
    const querySnapshot = await getDocs(forumsCollection);
    const forumsData = querySnapshot.docs.map((doc) => doc.data() as Forum);
    return forumsData;
  } catch (error) {
    console.error("Error fetching forums:", error);
    return [];
  }
}

export async function addForum(forum: Forum): Promise<void> {
  if (!forum) {
    throw new Error("Forum data is required");
  }

  const forumsCollection = collection(db, "forums");
  try {
    const docRef = await addDoc(forumsCollection, forum);
    forum.forumId = docRef.id;
    console.log("Forum added successfully with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding forum:", error);
    throw error;
  }
}

export async function fetchLeaderboard(): Promise<User[]> {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, orderBy("ecoPoints", "desc"), limit(10));

  try {
    const querySnapshot = await getDocs(q);
    const topUsersData = querySnapshot.docs.map((doc) => doc.data() as User);
    return topUsersData;
  } catch (error) {
    console.error("Error fetching top users:", error);
    return [];
  }
}

export async function addForumComment(comment: ForumComment): Promise<ForumComment> {
  if (!comment) {
     throw new Error("Comment data is required");
  }
 
  const forumsCollection = collection(db, "forums");
  const forumDocRef = doc(forumsCollection, comment.forumId);
  try {
     const forumDocSnap = await getDoc(forumDocRef);
     if (!forumDocSnap.exists()) {
       throw new Error("Forum document does not exist");
     }
 
     const newComment = {
       forumId: comment.forumId,
       forumCommenterId: comment.forumCommenterId,
       forumCommentId: Date.now().toString(),
       forumCommentAuthor: comment.forumCommentAuthor,
       forumCommentDate:  new Date().toISOString(),
       forumCommentContent: comment.forumCommentContent,
       forumCommentLikes: [],
       forumCommentDislikes: [],
     };
 
     await updateDoc(forumDocRef, {
       forumComments: arrayUnion(newComment),
     });
     console.log("Comment added successfully under the forum with ID:", comment.forumId);

     addPoints(comment.forumCommenterId, 10);

     return(newComment)
  } catch (error) {
     console.error("Error adding comment:", error);
     throw error;
  }
}

export async function updateCommentLikesDislikes(
  forumId: string,
  commentId: string,
  userId: string, 
  updateType: 'like' | 'dislike'
 ): Promise<void> {
  if (!forumId || !commentId || !userId || !updateType) {
     throw new Error("Forum ID, comment ID, user ID, and update type are required");
  }
 
  const forumsCollection = collection(db, "forums");
  const forumDocRef = doc(forumsCollection, forumId);
 
  try {
     const forumDocSnap = await getDoc(forumDocRef);
     if (!forumDocSnap.exists()) {
       throw new Error("Forum document does not exist");
     }
 
     const forumData = forumDocSnap.data();
     const comments: ForumComment[] = forumData.forumComments;
     const commentIndex = comments.findIndex(comment => comment.forumCommentId === commentId);
 
     if (commentIndex === -1) {
       throw new Error("Comment not found in forum");
     }
 
     const comment = comments[commentIndex];
 
     comment.forumCommentLikes = Array.isArray(comment.forumCommentLikes) ? comment.forumCommentLikes : [];
     comment.forumCommentDislikes = Array.isArray(comment.forumCommentDislikes) ? comment.forumCommentDislikes : [];
 
     if (updateType === 'like') {
       if (comment.forumCommentLikes.includes(userId)) {
         comment.forumCommentLikes = comment.forumCommentLikes.filter(id => id !== userId);
       } else {
         comment.forumCommentLikes.push(userId);
       }
     } else if (updateType === 'dislike') {
       if (comment.forumCommentDislikes.includes(userId)) {
         comment.forumCommentDislikes = comment.forumCommentDislikes.filter(id => id !== userId);
       } else {
         comment.forumCommentDislikes.push(userId);
       }
     }
 
     const updatedComments = [...comments];
     updatedComments[commentIndex] = comment;
 
     await updateDoc(forumDocRef, {
       forumComments: updatedComments,
     });

     addPoints(userId, 10);
 
     console.log(`Comment likes/dislikes updated successfully for comment with ID: ${commentId}`);
  } catch (error) {
     console.error("Error updating comment likes/dislikes:", error);
     throw error;
  }
}
