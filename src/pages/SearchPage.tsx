import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchPageVideoCard from "../components/SearchPageVideoCard";
import SearchShimmerUI from "../components/ShimmerUI/SearchShimmerUI";
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";
import {
  clearSearchResults,
  searchResultsLoading,
  searchVideosAsync,
} from "../store/slices/searchResult/searchResultSlice";
import { GlobalState, useAppDispatch } from "../types/globalTypes";
import { Item } from "../types/searchResultsType";

const SearchPage = () => {
  const videoDetails: Item[] = useSelector<GlobalState>(
    (state) => state.searchResults?.searchResult?.items
  ) as Item[];

  const searchResultsLoadingStatus = useSelector(searchResultsLoading);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Example: Get the value of the 'v' parameter
  const searchQuery = queryParams.get("search_query")!;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchQuery?.trim()?.length > 0) {
      dispatch(searchVideosAsync(searchQuery));
    }

    return () => {
      dispatch(clearSearchResults());
    };
  }, []);

  if (searchResultsLoadingStatus) {
    return (
      <Stack spacing={3} m={5}>
        <SearchShimmerUI />
        <SearchShimmerUI />
        <SearchShimmerUI />
      </Stack>
    );
  }

  return (
    <Box className="search-page-container" m={5} width={"100%"}>
      <SidebarOverlay />
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
              uplodedHowLongAgo={item.snippet.publishedAt}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default SearchPage;
