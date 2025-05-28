import { IUser } from "./user.interface";

export interface ITweet {
  objectId: string;
  tweet: string;
}

export interface IPosts {
  posts: IPost[];
}

export interface IPost {
  email: string;
  tweet: string;
  avatar: string;
}
