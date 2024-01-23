// // src/features/comments/commentsSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCommentsAsync = createAsyncThunk(
//   "comments/fetchComments",
//   async (videoId) => {
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${
//         import.meta.env.VITE_YOUTUBE_API_KEY
//       }`
//     );
//     return response.data.items;
//   }
// );

// const commentsSlice = createSlice({
//   name: "comments",
//   initialState: {
//     comments: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     clearComments: (state) => {
//       state.comments = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCommentsAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.comments = action.payload;
//       })
//       .addCase(fetchCommentsAsync.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearComments } = commentsSlice.actions;
// export default commentsSlice.reducer;

// export const selectComments = (state) => state.comments.comments;
