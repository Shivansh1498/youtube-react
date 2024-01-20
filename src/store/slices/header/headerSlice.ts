import { createSlice } from "@reduxjs/toolkit";
import { SidebarOpenStatus } from "../../../types/youtubeTypes";

const initialState: SidebarOpenStatus = {
  isSidebarOpen: true,
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
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = headerSlice.actions;

export default headerSlice.reducer;
