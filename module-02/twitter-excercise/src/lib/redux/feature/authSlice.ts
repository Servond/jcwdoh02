import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/interface/user.interface";

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
      };
      state.isLogin = false;
    },
  },
});

export const login = (params: IUser) => async (dispatch: any) => {
  try {
    dispatch(loginSuccess(params));
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
