import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YoutubeVideoCard from "../components/YoutubeVideoCard";
import { openSidebar } from "../store/slices/header/headerSlice";
import { mostPopularVideosAsync } from "../store/slices/youtubeVideo/youtubeVideoSlice";
import { IRootState } from "../store/store";

const Home = () => {
  const videos = useSelector<IRootState>((state) => state.youtubeVideos.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar());
    dispatch(mostPopularVideosAsync());
  }, []);

  return (
    <div className="home-container">
      {videos?.items.length &&
        videos?.items.map((video, index) => (
          <YoutubeVideoCard
            key={video.id}
            videoId={video.id}
            imageUrl={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            isVerified={video.contentDetails.licensedContent}
            viewCount={video.statistics.viewCount}
            videoLength={video.contentDetails.duration}
            timeAgo={video.snippet.publishedAt}
          />
        ))}
    </div>
  );
};

export default Home;
