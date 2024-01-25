import { Box, Skeleton, Stack } from "@mui/material";

const SearchShimmerUI = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Box>
        <Skeleton variant="rounded" width={380} height={250} />
      </Box>
      <Box>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "30rem" }} />
        <Stack direction={"row"} spacing={2} alignItems={"center"} mt={3}>
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "10rem" }} />
        </Stack>
        <Box mt={2}>
          <Stack direction={"row"} spacing={2}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem", width: "2rem" }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem", width: "2rem" }}
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchShimmerUI;
