// src/features/comments/commentsSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./commentThreadAPI";

export const fetchCommentsAsync = createAsyncThunk(
  "comments/fetchComments",
  async (channelId: string) => {
    return await fetchComments(channelId);
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearComments: (state) => {
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;

export const selectComments = (state) => state.comments.comments;
export const commentsInfoArray = (state) =>
  state?.commentSection?.comments?.items;
