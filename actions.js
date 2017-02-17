import api from './api';
import * ENDPOINTS from './endpoints';

export const fetchSomething = data => dispatch => {
  dispatch(/*requestSomething()*/);
  dispatch(apiJawn(data, ENDPOINTS.WHATEVER), error);
}