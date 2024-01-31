import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerLogo } from "../assets/svgs/HamburgerLogo";
import { SearchLogo } from "../assets/svgs/SearchLogo";
import { YoutubeLogo } from "../assets/svgs/YoutubeLogo";
import { openOverlaySidebar } from "../store/slices/header/headerSlice";
import { searchVideosAsync } from "../store/slices/searchResult/searchResultSlice";
import { toggleTheme } from "../store/slices/theme/themeSlice";
import { useAppDispatch } from "../types/globalTypes";
import { googleAutoSuggestion } from "../utils/googleAutoSuggestion";
import ToggleThemeButton from "./ToggleThemeButton";

// const customOptions: string[] = ["theme", "workspace", "learning"];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<string[]>([]);
  const [isOptionbarOpen, setisOptionbarOpen] = useState<boolean>(false);
  const theme = useTheme();

  let currentTheme = localStorage.getItem("theme") === "dark";

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSidebarOpen = () => {
    dispatch(openOverlaySidebar());
  };

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    if (e && e.preventDefault) {
      e.preventDefault();
      dispatch(searchVideosAsync(searchQuery));
      navigate(`/results?search_query=${searchQuery}`);
    }
  }

  function handleThemeChange(): void {
    dispatch(toggleTheme());
  }

  function handleOptionsSearch(e: any): void {
    setSearchQuery(e.target.textContent);
    dispatch(searchVideosAsync(e.target.textContent));
    navigate(`/results?search_query=${e.target.textContent}`);
    setisOptionbarOpen(false);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    setisOptionbarOpen(true);
  }

  useEffect(() => {
    let timmer = setTimeout(() => {
      if (searchQuery.length > 0) {
        async function fn() {
          setSearchOptions(await googleAutoSuggestion(searchQuery));
        }
        fn();
      } else {
        setSearchOptions([]);
      }
    }, 800);

    return () => {
      clearTimeout(timmer);
      setSearchOptions([]);
    };
  }, [searchQuery]);

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
              <Autocomplete
                disableClearable
                onBlur={() => setisOptionbarOpen(false)}
                open={isOptionbarOpen}
                id="searchText"
                options={searchOptions}
                renderOption={(props, option) => (
                  <li {...props} onClick={handleOptionsSearch}>
                    <span style={{ fill: fill, marginRight: 7, width: "27px" }}>
                      {SearchLogo}
                    </span>
                    {option}
                  </li>
                )}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      {...params.inputProps}
                      type="text"
                      name="searchText"
                      id="searchText"
                      placeholder="Search"
                      autoComplete={"off"}
                      value={searchQuery}
                      onChange={handleInputChange}
                      style={{
                        borderColor: border,
                        backgroundColor: inputBackground,
                        color: inputColor,
                      }}
                    />
                  </div>
                )}
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
            <ToggleThemeButton
              checked={currentTheme}
              onChange={handleThemeChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
