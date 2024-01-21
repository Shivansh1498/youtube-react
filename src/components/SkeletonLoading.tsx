import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoading = () => {
  return (
    <Stack direction={"column"} spacing={1}>
      <Skeleton width={"340px"} height={"500px"} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

export default SkeletonLoading;
