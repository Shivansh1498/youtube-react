import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import { getDesignTokens } from "./themes/globalThemePalette";
import { IRootState } from "./store/store";
import { createTheme } from "@mui/material/styles";
import YoutubePageLoading from "./components/SkeletonLoading";
import { mostPopularVideosAsync } from "./store/slices/youtubeVideo/youtubeVideoSlice";
import { useAppDispatch, useAppSelector } from "./types/globalTypes";

// Importing Pages Using Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const VideoDetail = lazy(() => import("./pages/VideoDetail"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const mode: PaletteMode = useSelector<IRootState>(
    (state) => state.theme.mode
  ) as PaletteMode;
  const dispatch = useAppDispatch();
  const youtubeVideosList = useAppSelector(
    (state) => state.youtubeVideos.video
  );

  const theme = createTheme(getDesignTokens(mode));

  useEffect(() => {
    if (!youtubeVideosList.length) {
      dispatch(mostPopularVideosAsync());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <main className="main-container">
          <Suspense fallback={<YoutubePageLoading />}>
            <Routes>
              <Route index element={<Home />} />
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
