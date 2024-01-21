import { Box, Stack } from "@mui/material";
import SearchPageVideoCard from "../components/SearchPageVideoCard";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const videoDetails = useSelector(
    (state) => state.youtubeVideos.searchQueryResult?.items
  );
  console.log(videoDetails?.[0].id.videoId);

  return (
    <Box className="search-page-container" m={5} width={"100%"}>
      <Stack spacing={3}>
        {videoDetails &&
          videoDetails.map((item) => (
            <SearchPageVideoCard
              key={item.etag}
              videoId={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnail={item.snippet.thumbnails.high.url}
              channelTitle={item.snippet.channelTitle}
              noOfViews={""}
              uplodedHowLongAgo={item.snippet.publishedAt}
              isVerified={""}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default SearchPage;
