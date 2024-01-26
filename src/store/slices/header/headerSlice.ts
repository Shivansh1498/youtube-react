import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../../types/globalTypes";

const initialState = {
  isSidebarOpen: true,
  isOverlaySidebarOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
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

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openOverlaySidebar,
  closeOverlaySidebar,
  toggleOverlaySidebar,
} = headerSlice.actions;

export const isOverlaySidebarStatus = (state: GlobalState) =>
  state.header.isOverlaySidebarOpen;

export default headerSlice.reducer;
