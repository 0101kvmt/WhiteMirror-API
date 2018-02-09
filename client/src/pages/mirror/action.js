import axios from 'axios';

import { MIRROR_GET_FAILURE, MIRROR_GET_REQUEST, MIRROR_GET_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS,  } from './types';

import Config from './../../config.json';

const apiUrl = "http://localhost:3131/v1/mirror/" ;


export const MirrorGet = (mirrorId) => {

  const mirrorConfiguration = {
    url: apiUrl + "mirror/" + mirrorId,
    method: 'get',
    mirror: {}
  }

  return dispatch => {
    dispatch({ type: MIRROR_GET_REQUEST });
    return axios.get(mirrorConfiguration.url)
      .then(res => {
        dispatch({ type: MIRROR_GET_SUCCESS, mirror: res.data.data.mirror});
      })
      .catch(err => {
        if(err.response){
          dispatch({ type: MIRROR_GET_FAILURE, errorMessage: err.response});
        }
        else{
          dispatch({ type: MIRROR_GET_FAILURE, errorMessage: 'Cannot connect to server. Please try again.'});
        }
      })
  }
};

export const getWeather = (longitude, latitude) => async (dispatch) => {

  const weatherConfig = {
    url: apiUrl + "weather/w",
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
