import { Box, Stack } from "@mui/material";
import SearchPageVideoCard from "../components/SearchPageVideoCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchVideosAsync } from "../store/slices/youtubeVideo/youtubeVideoSlice";

const SearchPage = () => {
  const videoDetails = useSelector(
    (state) => state.youtubeVideos.searchQueryResult?.items
  );

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const searchQuery = queryParams.get("search_query")!;
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      dispatch(searchVideosAsync(searchQuery));
    }
  }, []);

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
