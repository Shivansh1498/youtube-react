import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { IRootState } from "./store/store";
import { getDesignTokens } from "./themes/globalThemePalette";

// Importing Pages Using Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const VideoDetail = lazy(() => import("./pages/VideoDetail"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const isSidebarOpen = useSelector<IRootState, boolean>(
    (state) => state.header.isSidebarOpen
  );

  const mode = useSelector((state) => state.theme.mode);

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Header />
        <main className="main-container">
          {isSidebarOpen && <Sidebar />}
          <Suspense fallback={"loading..."}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch" element={<VideoDetail />} />
              <Route path="/results" element={<SearchPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
