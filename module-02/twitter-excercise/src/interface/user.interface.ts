export interface IUser {
  email: string;
  name: string;
  avatar: string;
  userId: string;
}

export interface ISignin {
  email: string;
  password: string;
}

export interface ISignup {
  email: string;
  name: string;
  password: string;
  confirmationPassword: string;
}
