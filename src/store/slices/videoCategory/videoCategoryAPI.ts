import { CategoriesChip } from "../../../types/videoCategoryChipTypes";
import youtubeAxios from "../../../utils/youtubeAxios";

export const fetchVideoCategories = async (): Promise<
  CategoriesChip[] | Error
> => {
  try {
    const result = [];
    const { data } = await youtubeAxios.get(
      `videoCategories?part=snippet&regionCode=IN&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );

    for (const item of data.items) {
      result.push({ id: item.id, category: item?.snippet?.title });
    }

    return result;
  } catch (error) {
    return new Error(`Error fetching video categories: ${error}`);
  }
};
