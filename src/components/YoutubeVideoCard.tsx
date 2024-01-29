import { Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../assets/svgs/VerifiedIcon";
import {
  convertDurationToTime,
  formatYoutubeCount,
  timeSincePublished,
} from "../utils/helperFunctions";
import { YoutubeVideoCardProps } from "../types/propTypes";

const YoutubeVideoCard = ({
  imageUrl,
  title,
  channelName,
  isVerified,
  viewCount,
  timeAgo,
  videoId,
  videoLength,
}: YoutubeVideoCardProps) => {
  const videoDuration = convertDurationToTime(videoLength);
  const theme = useTheme();

  return (
    <Link
      to={`/watch?v=${videoId}`}
      style={{ flexGrow: 1, flexShrink: 0, flexBasis: 300, maxWidth: 350 }}
    >
      <Card
        sx={{
          "&:hover": {
            boxShadow: (theme) => theme.shadows[10], // Adjust the shadow level as needed
          },
          height: "350px",
          cursor: "pointer",
        }}
        className="card-container"
      >
        <span style={{ position: "relative" }}>
          <CardMedia sx={{ height: "225px" }} image={imageUrl} title={""} />
          <span className="video-timespan-badge">{videoDuration}</span>
        </span>
        <CardContent>
          <Tooltip title={title}>
            <Typography
              className="video-title"
              gutterBottom
              variant="body1"
              component="p"
              noWrap
            >
              {title}
            </Typography>
          </Tooltip>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex" }}
          >
            {channelName}{" "}
            <span
              className="verified-icon"
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
      </Card>
    </Link>
  );
};

export default YoutubeVideoCard;
