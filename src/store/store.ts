import { configureStore } from "@reduxjs/toolkit";
import youtubeVideoReducer from "./slices/youtubeVideo/youtubeVideoSlice";
import headerReducer from "./slices/header/headerSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    youtubeVideos: youtubeVideoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export default store;
