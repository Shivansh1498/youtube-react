import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ChannelPageVideos } from "../../types/channelPageTypes";
import { Link } from "react-router-dom";
import {
  formatYoutubeCount,
  timeSincePublished,
} from "../../utils/helperFunctions";

const ChannelVideoCard = ({
  videoId,
  videoThubnail,
  videoTitle,
  videoViews,
  videoPostedDate,
}: ChannelPageVideos) => {
  return (
    <Link to={`/watch?v=${videoId}`}>
      <Card
        sx={{
          "&:hover": {
            boxShadow: (theme) => theme.shadows[10], // Adjust the shadow level as needed
          },
        }}
        className="channel-video-card"
        elevation={0}
      >
        <Box position={"relative"}>
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
            }}
            image={videoThubnail}
            alt={videoTitle}
          />
          {/* <span className="video-timespan-badge">11:15</span> */}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "2 2 auto" }}>
            <Typography
              component="p"
              variant="body1"
              className="channelPageVideoTitle"
            >
              {videoTitle}
            </Typography>
            <Typography component={"p"} variant="body2" color="text.secondary">
              {videoViews.length > 0 &&
                `${formatYoutubeCount(+videoViews)} views • `}
              {timeSincePublished(videoPostedDate)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default ChannelVideoCard;
