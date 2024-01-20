import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { VerifiedIcon } from "../assets/svgs/VerifiedIcon";
import {
  convertDurationToTime,
  formatNumberForView,
  timeSincePublished,
} from "../utils/helperFunctions";
import { Link } from "react-router-dom";
import { HomeVideoCard } from "../types/youtubeTypes";

const YoutubeVideoCard = ({
  imageUrl,
  title,
  channelName,
  isVerified,
  viewCount,
  timeAgo,
  videoId,
  videoLength,
}: HomeVideoCard) => {
  const videoDuration = convertDurationToTime(videoLength);

  return (
    <Link to={`/watch?v=${videoId}`}>
      <Card
        sx={{
          maxWidth: 340,
          "&:hover": {
            boxShadow: (theme) => theme.shadows[10], // Adjust the shadow level as needed
          },

          cursor: "pointer",
        }}
        className="card-container"
      >
        <span style={{ position: "relative" }}>
          <CardMedia
            sx={{ width: "350px", height: "225px" }}
            image={imageUrl}
            title="food"
          />
          <span className="video-timespan-badge">{videoDuration}</span>
        </span>
        <CardContent>
          <Typography
            className="video-title"
            gutterBottom
            variant="body1"
            component="a"
            noWrap
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex" }}
          >
            {channelName} <span> {isVerified && VerifiedIcon}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatNumberForView(viewCount)} views •{" "}
            {timeSincePublished(timeAgo)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default YoutubeVideoCard;
