import { ON_SEARCH_CHANGE } from "../constants";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case ON_SEARCH_CHANGE:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
