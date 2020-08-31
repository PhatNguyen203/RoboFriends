import {
  ON_SEARCH_CHANGE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../constants";

export const setSearchField = (text) => ({
  type: ON_SEARCH_CHANGE,
  payload: text,
});
export const setRequestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
