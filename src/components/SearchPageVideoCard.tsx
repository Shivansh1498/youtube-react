import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { VerifiedIcon } from "../assets/svgs/VerifiedIcon";
import { SearchPageVideoCardProps } from "../types/youtubeTypes";
import { timeSincePublished } from "../utils/helperFunctions";
import { Link } from "react-router-dom";

const SearchPageVideoCard = ({
  thumbnail,
  title,
  description,
  channelTitle,
  // noOfViews,
  uplodedHowLongAgo,
  videoId,
}: // isVerified,
SearchPageVideoCardProps) => {
  return (
    <Link to={`/watch?v=${videoId}`}>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          "&:hover": {
            boxShadow: (theme) => theme.shadows[10], // Adjust the shadow level as needed
          },

          cursor: "pointer",
        }}
        elevation={0}
      >
        <Box className="search-page-video-card">
          <CardMedia
            component="img"
            sx={{ width: 371, objectFit: "contain" }}
            image={thumbnail}
            alt="Live from space album cover"
          />
          <span className="video-timespan-badge">10:40</span>
        </Box>
        <Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                noWrap
                component="div"
                variant="h6"
                className="search-page-video-card-title"
              >
                {title}
              </Typography>
              <Typography component={"span"} variant="body2">
                57M views • {timeSincePublished(uplodedHowLongAgo)}
              </Typography>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{
                  display: "inline-block",
                  height: "28px",
                  width: "28px",
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                className="search-page-video-card-channel-name"
              >
                {channelTitle}
              </Typography>
              <span className="verified-icon search-page-video-card-verified-icon">
                {VerifiedIcon}
              </span>
            </Stack>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                className="search-page-video-card-description"
              >
                {description}
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <Chip
                  label="4K"
                  size="small"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "600",
                    borderRadius: "5px",
                  }}
                />{" "}
                <Chip
                  label="CC"
                  size="small"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "600",
                    borderRadius: "5px",
                  }}
                />
              </Stack>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default SearchPageVideoCard;
