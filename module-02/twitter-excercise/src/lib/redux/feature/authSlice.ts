import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, ISignin } from "@/interface/user.interface";
import { signinService } from "@/service/auth.service";
import { deleteCookie } from "cookies-next";

export interface IAuth {
  user: IUser;
  isLogin: boolean;
}

const initialState: IAuth = {
  user: {
    email: "",
    name: "",
    avatar: "",
    userId: "",
    role: "",
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: IAuth, action: PayloadAction<IUser>) => {
      state.user = {
        ...action.payload,
      };
      state.isLogin = true;
    },
    logoutSuccess: (state: IAuth) => {
      state.user = {
        email: "",
        name: "",
        avatar: "",
        userId: "",
        role: "",
      };
      state.isLogin = false;
    },
  },
});

export const login = (params: ISignin) => async (dispatch: any) => {
  try {
    const { email, name, avatar, userId, role } = await signinService(params);

    dispatch(loginSuccess({ email, name, avatar, userId, role }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    dispatch(logoutSuccess());
    deleteCookie("token");
  } catch (err) {
    console.log(err);
  }
};

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
