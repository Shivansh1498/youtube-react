import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";
import VideoCategoryChip from "../components/VideoCategoryChip";
import YoutubeVideoCard from "../components/YoutubeVideoCard";
import { fetchVideoCategoriesAsync } from "../store/slices/videoCategory/videoCategorySlice";
import { useAppDispatch, useAppSelector } from "../types/globalTypes";
import { CategoriesChip } from "../types/videoCategoryChipTypes";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeVideos.video);
  const videoCategories = useAppSelector(
    (state) => state.videoCategory.categories
  );
  const videoPageError = useAppSelector((state) => state.youtubeVideos.error);

  useEffect(() => {
    dispatch(fetchVideoCategoriesAsync());
  }, []);

  const errorFetchingYoutubeVideos =
    typeof videoPageError === "string" && videoPageError.length !== null;

  return (
    <Box className="homepage-container">
      <Stack
        spacing={1}
        direction={"row"}
        overflow={"auto"}
        mx={3}
        className="homepage-chip-container"
      >
        <VideoCategoryChip category="All" categoryId={""} />
        {videoCategories.map((data: CategoriesChip) => (
          <VideoCategoryChip
            key={data.id}
            categoryId={data.id}
            category={data.category}
          />
        ))}
      </Stack>
      {errorFetchingYoutubeVideos ? (
        <ErrorPage />
      ) : (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={{ sm: "center", md: "flex-start" }}
          useFlexGap
          spacing={3}
          p={3}
        >
          {!!videos?.length &&
            videos?.map((video: any) => (
              <YoutubeVideoCard
                key={video.id}
                videoId={video.id}
                imageUrl={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                channelName={video.snippet.channelTitle}
                isVerified={video.contentDetails.licensedContent}
                viewCount={video.statistics.viewCount}
                videoLength={video.contentDetails.duration}
                timeAgo={video.snippet.publishedAt}
              />
            ))}
          <SidebarOverlay />
        </Stack>
      )}
    </Box>
  );
};

export default Home;
