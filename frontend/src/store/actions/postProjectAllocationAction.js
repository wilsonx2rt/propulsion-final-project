import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';
import { getProjectAllocationsAction } from './getProjectAllocationsAction';

export const postProjectAllocationAction = (props, body, method, allocation_id) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
      'content-type': 'application/json',
    });
    const config = {
      method,
      headers,
      body: JSON.stringify(body),
    }
    let url;
    if (method === 'PATCH') url = `${SERVER_URL}project_allocation/${allocation_id}/`
    else if (method === "POST") url = `${SERVER_URL}project_allocation/new/`
    return fetch(url, config);
  })
  .then(response => {
    if (response.ok) {
      const fetchURL = `${SERVER_URL}project_allocation/allocations/${props.project_id}/`
      dispatch(getProjectDetailsAction(props));
      dispatch(getProjectAllocationsAction(props, fetchURL));
    }
  })
  
}
