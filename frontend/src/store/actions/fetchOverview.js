import { SERVER_URL, SET_OVERVIEW } from "../constants";
import { validateTokens } from "./validateTokens";
import { overview } from "../reducers/overview";

export const fetchOverviewActionCreator = props => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`
      };
      const config = {
        method: "GET",
        headers
      };
      return fetch(`${SERVER_URL}overview/projects/`, config);
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(overview => {
      console.log("from the fetch overviews", overview);
      const action = setOverview(overview);
      dispatch(action);
    });
};

const setOverview = overview => {
  return {
    type: SET_OVERVIEW,
    payload: {
      overview
    }
  };
};
