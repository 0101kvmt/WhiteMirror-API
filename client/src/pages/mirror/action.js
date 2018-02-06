import axios from 'axios';

import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from './types';

import Config from './../../config.json';

const apiUrl = "http://localhost:3131/v1/mirror/weather" ;

export const getWeather = (longitude, latitude) => async (dispatch) => {

  const weatherConfig = {
    url: apiUrl,
    config: {
      headers: {"Access-Control-Allow-Origin": "*"}
    }

  }

  dispatch({ type: FETCH_WEATHER_REQUEST })
    try {
      let { data } = await axios(weatherConfig.url, weatherConfig.config)
      dispatch({ type: FETCH_WEATHER_SUCCESS, weather: data.data.Weather })
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCH_WEATHER_FAILURE, errorMessage: err})
    }
};
