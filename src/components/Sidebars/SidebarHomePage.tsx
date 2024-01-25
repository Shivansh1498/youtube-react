import {
  Box,
  Divider,
  List,
  Stack
} from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { IRootState } from "../../store/store";
import SidebarMappedData from "./utils/SidebarMappedData";

const SidebarHomePage = () => {

  const isSidebarOpen = useSelector<IRootState, boolean>(
    (state) => state.header.isSidebarOpen
  );

  return (
    <Stack direction={"row"} spacing={2}>
      {isSidebarOpen && (
        <div className="sidebar-container">
          <Box position={"sticky"} sx={{ top: "64px" }}>
            <List sx={{ width: "240px" }}><SidebarMappedData/></List>
          </Box>
          <Divider />
        </div>
      )}
      <Outlet />
    </Stack>
  );
};

export default SidebarHomePage;
