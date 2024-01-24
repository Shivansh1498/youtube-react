import { useTheme } from "@emotion/react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerLogo } from "../assets/svgs/HamburgerLogo";
import { SearchLogo } from "../assets/svgs/SearchLogo";
import { YoutubeLogo } from "../assets/svgs/YoutubeLogo";
import { toggleSidebar } from "../store/slices/header/headerSlice";
import { searchVideosAsync } from "../store/slices/searchResult/searchResultSlice";
import { toggleTheme } from "../store/slices/theme/themeSlice";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const theme = useTheme();

  const {
    icon: { fill },
    appbar: {
      background,
      border,
      inputBackground,
      inputColor,
      searchIconBackground,
    },
  } = theme.palette;

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const isSidebarOpen = () => {
    dispatch(toggleSidebar());
  };

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(searchVideosAsync(searchQuery));
    navigate(`/results?search_query=${searchQuery}`);
  }

  function handleThemeChange(): void {
    dispatch(toggleTheme());
  }

  return (
    <Box
      sx={{ flexGrow: 1, top: 0, height: "64px" }}
      position={"sticky"}
      zIndex={1}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: background }}
      >
        <Toolbar className="navbar-container">
          <div className="left-section">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, fill: theme.palette.icon.fill }}
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
                sx={{ mr: 2, width: "110px", fill: theme.palette.icon.fill }}
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
                style={{
                  borderColor: border,
                  backgroundColor: inputBackground,
                  color: inputColor,
                }}
              />
              <Button
                className="search-btn"
                type="submit"
                sx={{ backgroundColor: searchIconBackground }}
              >
                <span style={{ fill: fill }}>{SearchLogo}</span>
              </Button>
            </div>
          </form>
          <div className="right-section">
            <ToggleThemeButton onChange={handleThemeChange} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
