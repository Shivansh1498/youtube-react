import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { YoutubeVideoCardProps } from "../types/propTypes";
import { VerifiedIcon } from "../assets/svgs/VerifiedIcon";
import { useTheme } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import {
  convertDurationToTime,
  formatYoutubeCount,
  timeSincePublished,
} from "../utils/helperFunctions";
import { useEffect } from "react";
import { useAppDispatch } from "../types/globalTypes";
import {
  clearChannelInfo,
  clearcurrentVideoDetail,
  currentVideoDetailAsync,
} from "../store/slices/currentVideo/currentVideoSlice";
import { fetchCommentsAsync } from "../store/slices/commentThread/commentThreadSlice";

const WatchPageVideoCard = ({
  imageUrl,
  title,
  channelName,
  isVerified,
  viewCount,
  timeAgo,
  videoId,
  videoLength,
}: YoutubeVideoCardProps) => {
  const location = useLocation();
  const theme = useTheme();
  const videoDuration = convertDurationToTime(videoLength);
  const dispatch = useAppDispatch();

  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const currentVideoId = queryParams.get("v");

  useEffect(() => {
    if (typeof currentVideoId === "string") {
      dispatch(currentVideoDetailAsync(currentVideoId));
      dispatch(fetchCommentsAsync(currentVideoId));
    }

    return () => {
      dispatch(clearChannelInfo());
      dispatch(clearcurrentVideoDetail());
    };
  }, [currentVideoId]);

  return (
    <Link to={`/watch?v=${videoId}`}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          "&:hover": {
            boxShadow: (theme) => theme.shadows[10], // Adjust the shadow level as needed
          },
          cursor: "pointer",
        }}
        elevation={0}
      >
        <Box position={"relative"}>
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: { xs: 150, md: 200 },
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
            image={imageUrl}
            alt={title}
          />
          <span className="video-timespan-badge">{videoDuration}</span>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "2 2 auto" }}>
            <Typography
              component="p"
              variant="body1"
              className="watchPageVideoTitle"
            >
              {title}
            </Typography>
            <Typography
              component="p"
              variant="body2"
              color="text.secondary"
              display={"inline-block"}
            >
              {channelName}{" "}
              <span
                className="watchpage-verified-icon"
                style={{ fill: theme.palette.icon.fill }}
              >
                {" "}
                {isVerified && VerifiedIcon}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatYoutubeCount(viewCount)} views •{" "}
              {timeSincePublished(timeAgo)}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Link>
  );
};

export default WatchPageVideoCard;
