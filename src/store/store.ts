import { configureStore } from "@reduxjs/toolkit";
import commentThreadSlice from "./slices/commentThread/commentThreadSlice";
import currentVideoSlice from "./slices/currentVideo/currentVideoSlice";
import headerSlice from "./slices/header/headerSlice";
import themeSlice from "./slices/theme/themeSlice";
import youtubeVideoSlice from "./slices/youtubeVideo/youtubeVideoSlice";
import searchResultSlice from "./slices/searchResult/searchResultSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    header: headerSlice,
    youtubeVideos: youtubeVideoSlice,
    currentVideo: currentVideoSlice,
    searchResults: searchResultSlice,
    commentSection: commentThreadSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export default store;
