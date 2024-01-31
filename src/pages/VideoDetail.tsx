import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";
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
import {
  GlobalState,
  useAppDispatch,
  useAppSelector,
} from "../types/globalTypes";
import { formatYoutubeCount } from "../utils/helperFunctions";

const VideoDetail = () => {
  const videos = useAppSelector((state) => state.youtubeVideos.video);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const videoPlaying = useSelector(
    (state: GlobalState) => state.currentVideo?.currentVideoDetail
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
    if (typeof videoId === "string") {
      dispatch(currentVideoDetailAsync(videoId));
      dispatch(fetchCommentsAsync(videoId));
    }

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
    <Container
      maxWidth="xl"
      sx={{ marginBottom: 10 }}
      className="watchPageContainer"
    >
      <SidebarOverlay />
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={7} md={8}>
          <Box>
            <iframe
              width={"100%"}
              style={{ aspectRatio: "16/9" }}
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
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Stack spacing={1}>
            {!!videos?.length &&
              videos?.map((video: any) => (
                <WatchPageVideoCard
                  key={video.id}
                  videoId={video.id}
                  imageUrl={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  channelName={video.snippet.channelTitle}
                  isVerified={video.contentDetails.licensedContent}
                  viewCount={video.statistics.viewCount}
                  videoLength={video.contentDetails.duration}
                  timeAgo={video.snippet.publishedAt}
                />
              ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoDetail;
