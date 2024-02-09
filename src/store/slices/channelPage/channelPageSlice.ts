import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChannelPage } from "../../../types/channelPageTypes";
import { fetchChannelPage, fetchChannelVideos } from "./channelPageAPI";

const initialState: ChannelPage = {
  channelHeader: {
    channelLogo: "",
    channelTitle: "",
    channelDescription: "",
    channelTotalVideos: "",
    channelTotalSubscribers: "",
  },
  channelVideos: [],
  loading: false,
  error: null,
};

export const fetchChannelPageAsync = createAsyncThunk(
  "channelPage/fetchChannelPage",
  async (channelId: string) => {
    return await fetchChannelPage(channelId);
  }
);

export const fetchChannelVideosAsync = createAsyncThunk(
  "channelPage/fetchChannelVideos",
  async (channelId: string) => {
    return await fetchChannelVideos(channelId);
  }
);

const ChannelPageSlice = createSlice({
  name: "channelPage",
  initialState,
  reducers: {
    clearYoutubeChannelState: (state) => {
      state.channelHeader = {
        channelLogo: "",
        channelTitle: "",
        channelDescription: "",
        channelTotalVideos: "",
        channelTotalSubscribers: "",
      };
      state.channelVideos = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelPageAsync.pending, (state) => {
        state.loading = true;
        state.channelHeader = {
          channelLogo: "",
          channelTitle: "",
          channelDescription: "",
          channelTotalVideos: "",
          channelTotalSubscribers: "",
        };
        state.error = null;
      })
      .addCase(fetchChannelPageAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload !== undefined) {
          state.channelHeader = action.payload;
        }
      })
      .addCase(fetchChannelPageAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchChannelVideosAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChannelVideosAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.channelVideos = action.payload;
        }
      })
      .addCase(fetchChannelVideosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearYoutubeChannelState } = ChannelPageSlice.actions;

export default ChannelPageSlice.reducer;
