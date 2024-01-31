import { Stack } from "@mui/material";
import SidebarOverlay from "../components/Sidebars/SidebarOverlay";
import YoutubeVideoCard from "../components/YoutubeVideoCard";
import { useAppSelector } from "../types/globalTypes";

const Home = () => {
  const videos = useAppSelector((state) => state.youtubeVideos.video);

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sm: "center", md: "flex-start" }}
      m={5}
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
  );
};

export default Home;
