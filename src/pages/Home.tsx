import { Box, Stack } from "@mui/material";
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";
import VideoCategoryChip from "../components/VideoCategoryChip";
import YoutubeVideoCard from "../components/YoutubeVideoCard";
import { useAppSelector } from "../types/globalTypes";

const Home = () => {
  const videos = useAppSelector((state) => state.youtubeVideos.video);
  // const sidebarStatus = useAppSelector((state) => state.header.isSidebarOpen);

  return (
    <Box>
      <Stack spacing={1} direction={"row"} overflow={"auto"} px={5}>
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
        <VideoCategoryChip />
      </Stack>
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
    </Box>
  );
};

export default Home;
