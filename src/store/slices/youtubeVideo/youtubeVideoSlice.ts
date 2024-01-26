import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mostPopularVideos } from "./youtubeVideoSliceAPI";

const initialState = {
  video: [],
  loading: false,
  error: null as unknown,
};

export const mostPopularVideosAsync = createAsyncThunk(
  "youtubeVideo/mostPopularVideos",
  async () => {
    return await mostPopularVideos();
  }
);

const youtubeVideoSlice = createSlice({
  name: "youtubeVideo",
  initialState,
  reducers: {
    clearYouTubeVideo: (state) => {
      state.video = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mostPopularVideosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(mostPopularVideosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
      })
      .addCase(mostPopularVideosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearYouTubeVideo } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
