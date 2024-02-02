import { Chip } from "@mui/material";
import { useState } from "react";
import { mostPopularVideosAsync } from "../store/slices/youtubeVideo/youtubeVideoSlice";
import { useAppDispatch } from "../types/globalTypes";

const VideoCategoryChip = ({
  category,
  categoryId,
}: {
  category: string;
  categoryId: string;
}) => {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    dispatch(mostPopularVideosAsync(categoryId));
  };

  return (
    <Chip
      size="medium"
      label={category}
      onClick={handleClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      sx={{
        borderRadius: 2,
        color: isFocused ? "black" : "",
        backgroundColor: isFocused ? "white" : "",
        "&:hover": {
          color: isFocused ? "black" : "",
          backgroundColor: isFocused ? "white" : "",
        },
      }}
    />
  );
};

export default VideoCategoryChip;
