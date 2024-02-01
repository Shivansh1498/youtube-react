import { Chip } from "@mui/material";
import { useAppDispatch } from "../types/globalTypes";
import { mostPopularVideosAsync } from "../store/slices/youtubeVideo/youtubeVideoSlice";

const VideoCategoryChip = ({
  category,
  categoryId,
}: {
  category: string;
  categoryId: string;
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(mostPopularVideosAsync(categoryId));
  };

  return (
    <Chip
      size="medium"
      label={category}
      onClick={handleClick}
      sx={{ borderRadius: 2 }}
    />
  );
};

export default VideoCategoryChip;
