import axios from 'axios';

import { SECTION_POST_FAILURE, SECTION_POST_REQUEST, SECTION_POST_SUCCESS, MIRROR_POST_FAILURE, MIRROR_POST_REQUEST, MIRROR_POST_SUCCESS, MIRROR_GET_FAILURE, MIRROR_GET_REQUEST, MIRROR_GET_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS,  } from './types';



const apiUrl = "http://localhost:3131/v1/" ;


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
        dispatch({ type: MIRROR_GET_SUCCESS, mirror: res.data.data.mirror,  errorMessage: ''});
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

export const MirrorPost = (userId) => {

  const mirrorConfiguration = {
    url: apiUrl + "mirror",
    method: 'post',
    mirror: {
      user: userId
    }
  }

  return dispatch => {
    dispatch({ type: MIRROR_POST_REQUEST });
    return axios.post(mirrorConfiguration.url, mirrorConfiguration.mirror)
      .then(res => {
        dispatch({ type: MIRROR_POST_SUCCESS, mirror: res.data.data.mirror,  errorMessage: ''});
      })
      .catch(err => {
        if(err.response){
          dispatch({ type: MIRROR_POST_FAILURE, errorMessage: err.response});
        }
        else{
          dispatch({ type: MIRROR_POST_FAILURE, errorMessage: 'Cannot connect to server. Please try again.'});
        }
      })
  }
};

export const SectionPost = (userId, sectionName, option, mirrorId) => {

  const sectionConfiguration = {
    url: apiUrl + "section/",
    method: 'post',
    section: {
      userId: userId,
      sectionName: sectionName,
      mirrorId: mirrorId,
      enum: option
    }
  }

  return dispatch => {
    dispatch({ type: SECTION_POST_REQUEST });
    return axios.post(sectionConfiguration.url, sectionConfiguration.section)
      .then(res => {
        dispatch({ type: SECTION_POST_SUCCESS, section: res.data.data.section, errorMessage: ''});
      })
      .catch(err => {
        if(err.response){
          dispatch({ type: SECTION_POST_FAILURE, errorMessage: err.response});
        }
        else{
          dispatch({ type: SECTION_POST_FAILURE, errorMessage: 'Cannot connect to server. Please try again.'});
        }
      })
  }
};


export const getWeather = (latitude, longitude) => async (dispatch) => {

  const weatherConfig = {
    url: apiUrl + "mirror/weather/w",
    method: 'post',
    weather: {
      latitude: latitude,
      longitude: longitude
    },
    config: {
      headers: {"Access-Control-Allow-Origin": "*"}
    }

  }

  dispatch({ type: FETCH_WEATHER_REQUEST })
    try {
      let { data } = await axios.post(weatherConfig.url, weatherConfig.weather)
      dispatch({ type: FETCH_WEATHER_SUCCESS, weather: data.data.Weather })
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCH_WEATHER_FAILURE, errorMessage: err})
    }
};
