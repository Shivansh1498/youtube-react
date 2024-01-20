import { Box, Stack } from "@mui/material";
import SearchPageVideoCard from "../components/SearchPageVideoCard";

const SearchPage = () => {
  return (
    <Box className="search-page-container" m={5} width={"100%"}>
      <Stack spacing={3}>
        <SearchPageVideoCard />
        <SearchPageVideoCard />
        <SearchPageVideoCard />
      </Stack>
    </Box>
  );
};

export default SearchPage;
