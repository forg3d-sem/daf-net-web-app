export type Post = {
    postId: string;
    profile: Profile;
    title: string;
    content: string;
    createdAt: string; // or Date if you parse it
};

export type Profile = {
    userId: string;
    imageUrl: string;
    username: string;
    firstName: string;
    lastName: string;
};

export type Comment = {
    commentId: string;
    content: string;
    createdAt: string; // or Date if parsed
    profile: CommentProfile;
};

export type CommentProfile = {
    userId: string;
    imageUrl: string;
    firstName: string;
    lastName: string;
};