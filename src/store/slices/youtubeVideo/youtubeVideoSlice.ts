import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoState } from "../../../types/youtubeTypes";
import { mostPopularVideos } from "./youtubeVideoSliceAPI";

interface AsyncThunkConfig {}

const initialState: VideoState = {
  video: null,
  loading: false,
  error: null,
};

export const mostPopularVideosAsync: AsyncThunk<any, void, AsyncThunkConfig> =
  createAsyncThunk("youtubeVideo/mostPopularVideos", async () => {
    return await mostPopularVideos();
  });

const youtubeVideoSlice = createSlice({
  name: "youtubeVideo",
  initialState,
  reducers: {
    clearYouTubeVideo: (state: VideoState) => {
      state.video = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mostPopularVideosAsync.pending, (state: VideoState) => {
        state.loading = true;
      })
      .addCase(
        mostPopularVideosAsync.fulfilled,
        (state: VideoState, action) => {
          state.loading = false;
          state.video = action.payload;
        }
      )
      .addCase(mostPopularVideosAsync.rejected, (state: VideoState, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearYouTubeVideo } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
