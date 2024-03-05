import EcoChat from './ecoChat'

type User = {
    userID: string;
    username: string ;
    password: string;
    name: string ;
    email: string;
    profilePicture: string;
    ecoPoints: number;
    ecoFriends: string[];
    ecoCommunity: string[];
    ecoChats: EcoChat[];
    homeAddress: string;
    electricalBill: number;
    blogPosts: string[];
    blogsRead: string[];
    carbonFootprintInfo: {
      total: number;
      transportation: number;
      food: number;
      housing: number;
      goodsAndServices: number;
      waste: number;
    };
  };

  export default User