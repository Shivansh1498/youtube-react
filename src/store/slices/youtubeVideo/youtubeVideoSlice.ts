import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mostPopularVideos } from "./youtubeVideoSliceAPI";
import { YoutubeVideos } from "../../../types/youtubeVideosTypes";

const initialState: YoutubeVideos = {
  video: [],
  loading: false,
  error: null as unknown,
};

export const mostPopularVideosAsync = createAsyncThunk(
  "youtubeVideo/mostPopularVideos",
  async (videoCategoryId: string, { rejectWithValue }) => {
    try {
      return await mostPopularVideos(videoCategoryId);
    } catch (error) {
      return rejectWithValue(error);
    }
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
        state.error = null;
      })
      .addCase(mostPopularVideosAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.video = action.payload;
          state.error = null;
        } else {
          state.video = [];
          state.error = action.payload.message;
        }
      })
      .addCase(mostPopularVideosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { clearYouTubeVideo } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
