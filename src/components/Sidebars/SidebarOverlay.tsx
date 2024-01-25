// Import necessary dependencies
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HamburgerLogo } from "../../assets/svgs/HamburgerLogo";
import { YoutubeLogo } from "../../assets/svgs/YoutubeLogo";
import {
  closeOverlaySidebar,
  isOverlaySidebarStatus,
} from "../../store/slices/header/headerSlice";
import SidebarMappedData from "./utils/SidebarMappedData";

const SidebarOverlay = () => {
  const dispatch = useDispatch();
  const OverlaySidebarStatus = useSelector(isOverlaySidebarStatus);
  const theme = useTheme();

  // Drawer content
  const drawerContent = (
    <List sx={{ width: 240 }}>
      <ListItem>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, fill: theme.palette.icon.fill }}
          onClick={() => dispatch(closeOverlaySidebar())}
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
      </ListItem>
      <SidebarMappedData />
    </List>
  );

  return (
    <Drawer
      anchor="left"
      open={OverlaySidebarStatus}
      onClose={() => dispatch(closeOverlaySidebar())}
    >
      {drawerContent}
    </Drawer>
  );
};

// Export the component
export default SidebarOverlay;
