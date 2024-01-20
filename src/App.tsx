import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { IRootState } from "./store/store";

// Importing Pages Using Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const VideoDetail = lazy(() => import("./pages/VideoDetail"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const isSidebarOpen = useSelector<IRootState, boolean>(
    (state) => state.header.isSidebarOpen
  );

  return (
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
  );
};

export default App;
