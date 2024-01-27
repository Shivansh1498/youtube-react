import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

interface themeInitialType {
  mode: ThemeType;
}

const initialState: themeInitialType = {
  mode: (localStorage.getItem("theme") as ThemeType) ?? "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: themeInitialType) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
