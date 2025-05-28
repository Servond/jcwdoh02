import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import postReducer from "./feature/postSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      post: postReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
