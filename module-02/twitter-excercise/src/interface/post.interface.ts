import { IUser } from "./user.interface";

interface ITweet {
  objectId: string;
  tweet: string;
}

export interface IPost {
  email: string;
  tweet: string;
  avatar: string;
}
