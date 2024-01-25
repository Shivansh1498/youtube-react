import { createSlice } from "@reduxjs/toolkit";
import { SidebarOpenStatus } from "../../../types/youtubeTypes";

const initialState: SidebarOpenStatus = {
  isSidebarOpen: true,
  isOverlaySidebarOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openSidebar: (state: SidebarOpenStatus) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state: SidebarOpenStatus) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state: SidebarOpenStatus) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openOverlaySidebar: (state: SidebarOpenStatus) => {
      state.isOverlaySidebarOpen = true;
    },
    closeOverlaySidebar: (state: SidebarOpenStatus) => {
      state.isOverlaySidebarOpen = false;
    },
    toggleOverlaySidebar: (state: SidebarOpenStatus) => {
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

export const isOverlaySidebarStatus = (state) =>
  state.header.isOverlaySidebarOpen;

export default headerSlice.reducer;
