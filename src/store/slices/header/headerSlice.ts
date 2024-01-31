import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../../types/globalTypes";

const initialState = {
  // isSidebarOpen: false,
  isOverlaySidebarOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openOverlaySidebar: (state) => {
      state.isOverlaySidebarOpen = true;
    },
    closeOverlaySidebar: (state) => {
      state.isOverlaySidebarOpen = false;
    },
    toggleOverlaySidebar: (state) => {
      state.isOverlaySidebarOpen = !state.isOverlaySidebarOpen;
    },
  },
});

export const { openOverlaySidebar, closeOverlaySidebar, toggleOverlaySidebar } =
  headerSlice.actions;

export const isOverlaySidebarStatus = (state: GlobalState) =>
  state.header.isOverlaySidebarOpen;

export default headerSlice.reducer;
