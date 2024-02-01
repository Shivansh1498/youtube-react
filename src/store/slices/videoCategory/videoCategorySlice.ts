import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CategoriesChip,
  VideoCategoryChip,
} from "../../../types/videoCategoryChipTypes";
import { fetchVideoCategories } from "./videoCategoryAPI";

const initialState = {
  categories: [],
  loading: false,
  error: null as unknown,
};

export const fetchVideoCategoriesAsync = createAsyncThunk(
  "videoCategories/categories",
  async () => {
    return await fetchVideoCategories();
  }
);

const videoCategoriesSlice = createSlice({
  name: "videoCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchVideoCategoriesAsync.pending,
        (state: VideoCategoryChip) => {
          state.loading = true;
        }
      )
      .addCase(
        fetchVideoCategoriesAsync.fulfilled,
        (
          state: VideoCategoryChip,
          action: PayloadAction<CategoriesChip[] | Error>
        ) => {
          state.loading = false;
          if (Array.isArray(action.payload)) {
            state.categories = action.payload;
            state.error = null;
          } else {
            state.error = action.payload.message;
          }
        }
      )
      .addCase(
        fetchVideoCategoriesAsync.rejected,
        (state: VideoCategoryChip, action) => {
          state.loading = false;
          state.error = action.error;
        }
      );
  },
});

export const {} = videoCategoriesSlice.actions;

export default videoCategoriesSlice.reducer;
