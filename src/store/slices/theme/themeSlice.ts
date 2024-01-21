import { createSlice } from "@reduxjs/toolkit";

interface themeType {
  mode: "light" | "dark";
}

const initialState: themeType = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: themeType) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
