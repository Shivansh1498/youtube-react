import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import VideoComment from "../components/VideoComment";
import WatchPageVideoCard from "../components/WatchPageVideoCard";
import {
  commentsInfoArray,
  fetchCommentsAsync,
} from "../store/slices/commentThread/commentThreadSlice";
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
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";

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
  const commentList = useSelector(commentsInfoArray);

  const channelId = videoPlaying?.snippet?.channelId;

  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const videoId = queryParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
    dispatch(currentVideoDetailAsync(videoId));
    dispatch(fetchCommentsAsync(videoId));

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
      <SidebarOverlay />
      <Box my={5} display={"flex"} sx={{ gap: 5 }}>
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
          <Box mt={3}>
            <Stack spacing={5}>
              <Typography variant="h6" component={"h6"}>
                Top 10 Comments
              </Typography>
              {commentList?.slice(0, 10).map((comment) => (
                <VideoComment
                  key={comment?.id}
                  authorName={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorDisplayName
                  }
                  authorAvatar={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                  authorComment={
                    comment?.snippet?.topLevelComment?.snippet?.textOriginal
                  }
                />
              ))}
            </Stack>
          </Box>
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
