import { IUser } from "./user.interface";

interface ITweet {
  objectId: string;
  tweet: string;
}

export interface IPost {
  email: string;
  name: string;
  avatar: string;
  objectId: string;
  tweets: ITweet[];
}
