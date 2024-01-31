import { Chip } from "@mui/material";

const VideoCategoryChip = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return <Chip size="medium" label="Chip Filled" onClick={handleClick} />;
};

export default VideoCategoryChip;
