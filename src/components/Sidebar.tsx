import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarData } from "../utils/sidebarData";
import { MouseEvent, useState } from "react";
import { useTheme } from "@emotion/react";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const theme = useTheme();

  const handleListItemClick = (
    _event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div className="sidebar-container">
      <Box position={"sticky"} sx={{ top: "64px" }}>
        <List sx={{ width: "240px" }}>
          {sidebarData.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(e) => handleListItemClick(e, index)}
              >
                <ListItemIcon
                  sx={{
                    height: "24px",
                    fill: theme.palette.icon.fill,
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontSize: "1.4rem",
                    lineHeight: "2rem",
                    fontWeight: "500",
                  }}
                  primary={data.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
    </div>
  );
};

export default Sidebar;
