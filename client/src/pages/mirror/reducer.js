import { MIRROR_GET_FAILURE, MIRROR_GET_REQUEST, MIRROR_GET_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from './types';

const INITIAL_STATE = {
  isRequesting: false,
  errorMessage: '',
  weather: {}
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case MIRROR_GET_REQUEST:
      return { ...state, isRequesting: true };
    case MIRROR_GET_SUCCESS:
      return { ...state, mirror: action.mirror, isRequesting: false };
    case MIRROR_GET_FAILURE:
      return { ...state, isRequesting: false, errorMessage: action.errorMessage };
    case FETCH_WEATHER_REQUEST:
      return { ...state, isRequesting: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, isRequesting: false, weather: action.weather };
    case FETCH_WEATHER_FAILURE:
      return { ...state, isRequesting: false, errorMessage: action.errorMessage };
    default:
      return state;
  }
};
