import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../types/globalTypes";
import { fetchChannelPageAsync } from "../store/slices/channelPage/channelPageSlice";
import { formatYoutubeCount } from "../utils/helperFunctions";

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
  } = useAppSelector((state) => state.channelInfo.channelHeader)!;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (typeof channelDetailId === "string") {
      dispatch(fetchChannelPageAsync(channelDetailId));
    }
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
          <Typography variant="h4" component={"h4"}>
            {channelTitle}
          </Typography>
          <Typography variant="body1" component={"p"}>
            {formatYoutubeCount(+channelTotalSubscribers)} subscribers ‧{" "}
            {formatYoutubeCount(+channelTotalVideos)} videos
          </Typography>
          <Typography variant="body1" component={"p"}>
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
              borderBottom: "1px solid #80808099", // Change this to the desired color
            },
          }}
        >
          <Tab label="Videos" />
        </Tabs>
        <Typography sx={{ p: 2 }} hidden={value !== 0}>
          Tab 1 Content
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
