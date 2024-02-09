import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  clearYoutubeChannelState,
  fetchChannelPageAsync,
  fetchChannelVideosAsync,
} from "../store/slices/channelPage/channelPageSlice";
import { useAppDispatch, useAppSelector } from "../types/globalTypes";
import { formatYoutubeCount } from "../utils/helperFunctions";
import ChannelVideoCard from "../components/VideoCards/ChannelVideoCard";
import { useTheme } from "@mui/system";

const ChannelDetail = () => {
  const [value, setValue] = useState<number>(0);
  const { channelDetailId } = useParams();
  const dispatch = useAppDispatch();
  const {
    channelLogo,
    channelTitle,
    channelDescription,
    channelTotalVideos,
    channelTotalSubscribers,
  } = useAppSelector((state) => state?.channelInfo?.channelHeader);
  const channelVideos = useAppSelector(
    (state) => state.channelInfo.channelVideos
  );
  const theme = useTheme();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (typeof channelDetailId === "string") {
      dispatch(fetchChannelPageAsync(channelDetailId));
      dispatch(fetchChannelVideosAsync(channelDetailId));
    }

    return () => {
      dispatch(clearYoutubeChannelState());
    };
  }, []);

  return (
    <Box m={3} className="channel-details-container">
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={3}
        alignItems={"center"}
      >
        <section className="channel-logo">
          <img
            className="channel-details-container_logo"
            src={channelLogo}
            alt={channelTitle}
          />
        </section>
        <Stack spacing={2} className="channel-info">
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            {channelTitle}
          </Typography>
          <Typography variant="body1" component={"p"} color="text.secondary">
            {formatYoutubeCount(+channelTotalSubscribers)} subscribers ‧{" "}
            {formatYoutubeCount(+channelTotalVideos)} videos
          </Typography>
          <Typography variant="body1" component={"p"} color="text.secondary">
            {channelDescription}
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="youtube channel tabs"
          sx={{
            "& .MuiTabs-flexContainer": {
              backgroundColor: theme.palette.youtubeTabs.background,
            },
          }}
        >
          <Tab label="Videos" />
        </Tabs>
        <Typography component={"section"} sx={{ p: 2 }} hidden={value !== 0}>
          <Stack
            direction={"row"}
            spacing={3}
            useFlexGap
            flexWrap={"wrap"}
            mt={1}
          >
            {channelVideos.map((video) => (
              <ChannelVideoCard
                key={video.videoId}
                videoId={video.videoId}
                videoThubnail={video.videoThubnail}
                videoTitle={video.videoTitle}
                videoViews={video.videoViews}
                videoPostedDate={video.videoPostedDate}
              />
            ))}
          </Stack>
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
