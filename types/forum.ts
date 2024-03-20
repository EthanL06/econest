import User from './user';
import ForumComment from './forumComment'
type Forum = {
    forumId: string;
    forumTitle: string;
    forumDescription: string;
    forumAuthor: string;
    forumImage: string;
    forumDate: string;
    forumViews: string;
    forumLikes: number;
    forumDislikes: number;
    forumComments: ForumComment[];
    forumTags: string[];
  };

  export default Forum