import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoState } from "../../../types/youtubeTypes";
import {
  mostPopularVideos,
  relatedVideos,
  searchVideos,
} from "./youtubeVideoSliceAPI";

interface AsyncThunkConfig {}

const initialState: VideoState = {
  video: null,
  relatedVideos: null,
  searchQueryResult: null,
  loading: false,
  error: null,
};

export const mostPopularVideosAsync: AsyncThunk<any, void, AsyncThunkConfig> =
  createAsyncThunk("youtubeVideo/mostPopularVideos", async () => {
    return await mostPopularVideos();
  });

export const relatedVideosAsync: AsyncThunk<any, string, AsyncThunkConfig> =
  createAsyncThunk(
    "youtubeVideo/relatedVideos",
    async (currentVideoId: string) => {
      return await relatedVideos(currentVideoId);
    }
  );

export const searchVideosAsync: AsyncThunk<any, string, AsyncThunkConfig> =
  createAsyncThunk("youtubeVideo/searchVideos", async (queryString: string) => {
    return await searchVideos(queryString);
  });

const youtubeVideoSlice = createSlice({
  name: "youtubeVideo",
  initialState,
  reducers: {
    clearYouTubeVideo: (state: VideoState) => {
      state.video = null;
      state.relatedVideos = null;
      state.searchQueryResult = null;
      state.loading = false;
      state.error = null;
    },
    clearSearchResults: (state: VideoState) => {
      state.searchQueryResult = null;
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
      })
      .addCase(relatedVideosAsync.pending, (state: VideoState) => {
        state.loading = true;
      })
      .addCase(relatedVideosAsync.fulfilled, (state: VideoState, action) => {
        state.loading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(relatedVideosAsync.rejected, (state: VideoState, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchVideosAsync.pending, (state: VideoState) => {
        state.loading = true;
      })
      .addCase(searchVideosAsync.fulfilled, (state: VideoState, action) => {
        state.loading = false;
        state.searchQueryResult = action.payload;
      })
      .addCase(searchVideosAsync.rejected, (state: VideoState, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearYouTubeVideo, clearSearchResults } =
  youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
