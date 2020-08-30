import { ON_SEARCH_CHANGE } from "../constants";

export const setSearchField = (text) => ({
  type: ON_SEARCH_CHANGE,
  payload: text,
});
