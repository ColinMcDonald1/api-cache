import API_REQUEST from './actions';
import ENDPOINTS from './ENDPOINTS';

function apiReducer = (state = {}, action) {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        [action.endpoint]: {
          [action.query]: true,
        }
      }
  }
}