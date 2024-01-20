import { Box, Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import WatchPageVideoCard from "../components/WatchPageVideoCard";
import { closeSidebar } from "../store/slices/header/headerSlice";

const VideoDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const videoId = queryParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <Container maxWidth="xl">
      <Box mt={5} display={"flex"} sx={{ gap: 5 }}>
        <iframe
          width={900}
          height={515}
          src={`https://www.youtube.com/embed/${videoId}?si=nNmzmkiab194pbnF`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <Stack spacing={3}>
          <WatchPageVideoCard />
          <WatchPageVideoCard />
          <WatchPageVideoCard />
        </Stack>
      </Box>
    </Container>
  );
};

export default VideoDetail;
