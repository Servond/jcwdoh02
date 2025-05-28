import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "@/interface/post.interface";
import { fetchPostService } from "@/service/post.service";

const initialState: IPosts = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state: IPosts, action: PayloadAction<IPosts>) => {
      state.posts = [...action.payload.posts];
    },
  },
});

export const fetchPost = () => async (dispatch: any) => {
  try {
    const data = await fetchPostService();

    dispatch(setPosts({ posts: data }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// export const logout = () => async (dispatch: any) => {
//   try {
//     dispatch(logoutSuccess());
//     deleteCookie("token");
//   } catch (err) {
//     console.log(err);
//   }
// };

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
