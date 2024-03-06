type EcoChat = {
    chatId: string;
    chatName: string;
    chatMembers: string[];
    chatMessages: {
      messageId: string;
      message: string;
      sender: string;
      time: string;
      senderName: string;
      senderProfilePicture: string;
    }[];
  };

  export default EcoChat