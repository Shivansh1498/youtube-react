import { Video } from "../../../types/youtubeVideosTypes";
import youtubeAxios from "../../../utils/youtubeAxios";

type TParams = {
  part: string;
  chart: string;
  regionCode: string;
  maxResults: number;
  videoCategoryId?: string;
  key: string;
};

export const mostPopularVideos = async (
  videoCategoryId: string = ""
): Promise<Video[] | Error> => {
  try {
    const params: TParams = {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "IN",
      maxResults: 20,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    if (videoCategoryId) {
      params.videoCategoryId = videoCategoryId;
    }

    const { data } = await youtubeAxios.get("/videos", {
      params: params,
    });

    return data.items;
  } catch (error) {
    return new Error(`Error fetching youtube videos: ${error}`);
  }
};
