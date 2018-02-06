import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from './types';

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
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
