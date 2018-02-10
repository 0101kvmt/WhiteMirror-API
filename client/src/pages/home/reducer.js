import { UPDATE_LOCATION_SUCCESS, UPDATE_LOCATION_REQUEST, UPDATE_LOCATION_FAILURE } from './types';

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
  isAuthenticated: false,
  location: {longitude: '', latitude: ''},
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_LOCATION_REQUEST:
      return { ...state, isRequesting: true };
    case UPDATE_LOCATION_SUCCESS:
      return { ...state, isRequesting: false };
    case UPDATE_LOCATION_FAILURE:
      return { ...state, isRequesting: false };
    default:
      return state;
  }
};
