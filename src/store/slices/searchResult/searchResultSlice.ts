import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchVideos } from "./searchResultAPI";

const initialState = {
  searchResult: {},
  loading: false,
  error: null,
};

export const searchVideosAsync = createAsyncThunk(
  "youtubeVideo/searchVideos",
  async (queryString: string) => {
    return await searchVideos(queryString);
  }
);

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResult = {};
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(searchVideosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchVideosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
      })
      .addCase(searchVideosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { clearSearchResults } = searchResultSlice.actions;

export const searchResultsLoading = (state) => state?.searchResults?.loading;

export default searchResultSlice.reducer;
