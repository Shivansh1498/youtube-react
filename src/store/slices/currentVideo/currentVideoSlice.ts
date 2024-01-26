import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../../types/globalTypes";
import { currentVideoChannelInfo, currentVideoDetail } from "./currentVideoAPI";

const initialState = {
  currentVideoDetail: {},
  channelInfo: {},
  loading: false,
  error: null as unknown,
};

export const currentVideoChannelInfoAsync = createAsyncThunk(
  "currentVideo/currentVideoChannelInfo",
  async (channelId: string) => {
    return await currentVideoChannelInfo(channelId);
  }
);

export const currentVideoDetailAsync = createAsyncThunk(
  "currentVideo/currentVideoDetail",
  async (queryString: string) => {
    return await currentVideoDetail(queryString);
  }
);

const currentVideoSlice = createSlice({
  name: "currentVideo",
  initialState,
  reducers: {
    clearAllCurrentVideo: (state) => {
      state.loading = false;
      state.channelInfo = {};
      state.error = null;
    },
    clearChannelInfo: (state) => {
      state.channelInfo = {};
    },
    clearcurrentVideoDetail: (state) => {
      state.currentVideoDetail = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(currentVideoChannelInfoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(currentVideoChannelInfoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.channelInfo = action.payload;
      })
      .addCase(currentVideoChannelInfoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(currentVideoDetailAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(currentVideoDetailAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentVideoDetail = action.payload;
      })
      .addCase(currentVideoDetailAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearAllCurrentVideo,
  clearChannelInfo,
  clearcurrentVideoDetail,
} = currentVideoSlice.actions;

export const currentVideoChannelName = (state: GlobalState) =>
  state.currentVideo?.channelInfo?.items?.[0]?.snippet?.title;

export const currentVideoChannelLogo = (state: GlobalState) =>
  state.currentVideo?.channelInfo?.items?.[0]?.snippet?.thumbnails?.default
    ?.url;

export const currentVideoChannelSubscriberCount = (state: GlobalState) =>
  state.currentVideo?.channelInfo?.items?.[0]?.statistics?.subscriberCount;

export default currentVideoSlice.reducer;
