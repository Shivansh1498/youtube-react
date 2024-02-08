import youtubeAxios from "../../../utils/youtubeAxios";

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
