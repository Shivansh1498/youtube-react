import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarData } from "../../../utils/sidebarData";
import { useTheme } from "@emotion/react";

const SidebarMappedData = () => {
  const theme = useTheme();
  return (
    <div>
      {sidebarData.map((data, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
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
    </div>
  );
};

export default SidebarMappedData;
