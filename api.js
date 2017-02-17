import apiReducer from './reducers';

function request(dispatch, endpoint, query /* All the other stuff you have */) {
  const state = apiReducer.getState();
  if (!state[endpoint][query]) {
    /* do the request and e'ry thang and then on success, add it to the state */
    dispatch(apiJawn(endpoint, query));
  }

}

export const apiJawn = (endpoint, query) => {
  return ({
    type: API_REQUEST,
    endpoint,
    query,
  })
}