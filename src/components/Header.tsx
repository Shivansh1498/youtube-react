import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerLogo } from "../assets/svgs/HamburgerLogo";
import { SearchLogo } from "../assets/svgs/SearchLogo";
import { YoutubeLogo } from "../assets/svgs/YoutubeLogo";
import { toggleSidebar } from "../store/slices/header/headerSlice";
import { searchVideosAsync } from "../store/slices/youtubeVideo/youtubeVideoSlice";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const isSidebarOpen = () => {
    dispatch(toggleSidebar());
  };

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(searchVideosAsync(searchQuery));
    navigate(`/results?search_query=${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <Box
      sx={{ flexGrow: 1, top: 1, height: "64px" }}
      position={"sticky"}
      zIndex={1}
    >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar className="navbar-container">
          <div className="left-section">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={isSidebarOpen}
            >
              <span>{HamburgerLogo}</span>
            </IconButton>
            <Link to="/">
              <IconButton
                disableRipple
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, width: "110px" }}
              >
                {YoutubeLogo}
              </IconButton>
            </Link>
          </div>
          <form onSubmit={handleSearch}>
            <div className="middle-section">
              <input
                type="text"
                name="searchText"
                id="searchText"
                placeholder="Search"
                autoComplete={"off"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="search-btn" type="submit">
                <span>{SearchLogo}</span>
              </Button>
            </div>
          </form>
          <div className="right-section">
            <Button
              variant="outlined"
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              {isDarkMode ? (
                <LightModeIcon color="warning" />
              ) : (
                <DarkModeIcon color="error" />
              )}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
