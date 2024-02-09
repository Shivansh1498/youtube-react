import axios from "axios";
import youtubeAxios from "../../../utils/youtubeAxios";
import { ChannelPageVideos } from "../../../types/channelPageTypes";

export const fetchChannelPage = async (channelId: string) => {
  try {
    const { data } = await youtubeAxios.get("/channels", {
      params: {
        part: "snippet,statistics",
        id: channelId,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    });

    const {
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url },
        },
      },
      statistics: { videoCount, subscriberCount },
    } = data.items?.[0];

    return {
      channelLogo: url,
      channelTitle: title,
      channelDescription: description,
      channelTotalVideos: videoCount,
      channelTotalSubscribers: subscriberCount,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchChannelVideos = async (channelId: string) => {
  try {
    let result: ChannelPageVideos[] = [];
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          order: "date",
          type: "video",
          maxResults: 20,
          channelId: channelId,
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
        },
      }
    );

    for (const item of data.items) {
      result.push({
        videoId: item.id.videoId,
        videoTitle: item.snippet.title,
        videoThubnail: item.snippet.thumbnails.medium.url,
        videoPostedDate: item.snippet.publishTime,
        videoViews: "",
      });
    }

    return result;
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};
