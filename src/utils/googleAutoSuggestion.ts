import axios from "axios";

export const googleAutoSuggestion = async (
  searchQuery: string
): Promise<string[]> => {
  const { data } = await axios.get(
    `https://customsearch.googleapis.com/customsearch/v1`,
    {
      params: {
        q: searchQuery,
        cx: import.meta.env.VITE_PROGRAMMABLE_SEARCH_ENGINE_API,
        key: import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_ENGINE_API,
      },
    }
  );
  const results = [];

  for (const item of data.items) {
    results.push(item.title);
  }

  return results.slice(0, 5);
};
