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
    forumComments: {
      forumId: string;
      forumCommentId: string;
      forumCommentAuthor: string;
      forumCommentDate: string;
      forumCommentContent: string;
      forumCommentLikes: number;
      forumCommentDislikes: number;
    }[];
    forumTags: string[];
  };

  export default Forum