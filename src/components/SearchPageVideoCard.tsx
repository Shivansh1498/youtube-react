import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const SearchPageVideoCard = () => {
  return (
    <Card sx={{ display: "flex", width: "100%" }} elevation={3}>
      <Box className="search-page-video-card">
        <CardMedia
          component="img"
          sx={{ width: 371, objectFit: "contain" }}
          image="https://i.ytimg.com/vi/OPazrdwYAm0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVSIDqm2MgIV1g0TA2csDQpZeXLA"
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
              Live From Space Live From Space Live From Space Live From Space
              Live From Space Live From Space Live From Space Live From Space
              Live From Space Live From Space Live From Space Live From Space
              Live From Space Live From Space
            </Typography>
            <Typography component={"span"} variant="body2">
              57M views • 2 months ago
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              className="search-page-video-card-description"
            >
              Mac MillerMac MillerMac MillerMac MillerMac MillerMac MillerMac
              MillerMac MillerMac MillerMac MillerMac MillerMac Miller MillerMac
              Miller MillerMac Miller
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              className="search-page-video-card-description"
            >
              Mac MillerMac MillerMac MillerMac MillerMac MillerMac MillerMac
              MillerMac MillerMac MillerMac MillerMac MillerMac Miller MillerMac
              Miller MillerMac Miller
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SearchPageVideoCard;
