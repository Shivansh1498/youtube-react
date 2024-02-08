import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChannelPage } from "../../../types/channelPageTypes";
import { fetchChannelPage } from "./channelPageAPI";

const initialState: ChannelPage = {
  channelHeader: null,
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

const ChannelPageSlice = createSlice({
  name: "channelPage",
  initialState,
  reducers: {},
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
      });
  },
});

export const {} = ChannelPageSlice.actions;

export default ChannelPageSlice.reducer;
