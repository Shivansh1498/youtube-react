import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import WatchPageVideoCard from "../components/WatchPageVideoCard";
import {
  clearChannelInfo,
  clearcurrentVideoDetail,
  currentVideoChannelInfoAsync,
  currentVideoChannelLogo,
  currentVideoChannelName,
  currentVideoChannelSubscriberCount,
  currentVideoDetailAsync,
} from "../store/slices/currentVideo/currentVideoSlice";
import { closeSidebar } from "../store/slices/header/headerSlice";
import { formatYoutubeCount } from "../utils/helperFunctions";

const VideoDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const videoPlaying = useSelector(
    (state) => state.currentVideo?.currentVideoDetail
  );
  const channelName = useSelector(currentVideoChannelName);
  const channelLogo = useSelector(currentVideoChannelLogo);
  const channelSubscriberCount = useSelector(
    currentVideoChannelSubscriberCount
  );

  const channelId = videoPlaying?.snippet?.channelId;

  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const videoId = queryParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(currentVideoDetailAsync(videoId));

    return () => {
      dispatch(clearChannelInfo());
      dispatch(clearcurrentVideoDetail());
    };
  }, []);

  useEffect(() => {
    if (channelId) {
      dispatch(currentVideoChannelInfoAsync(channelId));
    }
  }, [channelId]);

  return (
    <Container maxWidth="xl">
      <Box mt={5} display={"flex"} sx={{ gap: 5 }}>
        <Box maxWidth={900}>
          <iframe
            width={900}
            height={515}
            frameBorder={0}
            src={`https://www.youtube.com/embed/${videoId}?si=nNmzmkiab194pbnF&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Typography variant="h5" component={"p"}>
            {videoPlaying?.snippet?.title}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={1} mt={2}>
            <Avatar alt="" src={channelLogo} />
            <Box>
              <Typography variant="body1" component={"p"}>
                {channelName}
              </Typography>
              <Typography variant="body2" component={"p"}>
                {formatYoutubeCount(channelSubscriberCount)} subscribers
              </Typography>
            </Box>
          </Stack>
        </Box>
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
