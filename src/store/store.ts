import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme/themeSlice";
import headerSlice from "./slices/header/headerSlice";
import youtubeVideoSlice from "./slices/youtubeVideo/youtubeVideoSlice";
import currentVideoSlice from "./slices/currentVideo/currentVideoSlice";
// import commentThreadReducer from "./slices/commentThread/commentThreadSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    header: headerSlice,
    youtubeVideos: youtubeVideoSlice,
    currentVideo: currentVideoSlice,
    // commentSection: commentThreadReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export default store;
