import axios from 'axios';

import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types';

const apiUrl = "localhost:3131/user"

export const authenticate = (username, password) => {

  const authConfiguration = {
    url: apiUrl,
    method: 'post',
    auth: {
      "username": username,
      "password": password
    }

  }

  return dispatch => {
    dispatch({ type: AUTH_REQUEST });
    return axios.post(authConfiguration.url, authConfiguration.auth)
      .then(res => {
        dispatch({ type: AUTH_SUCCESS, currentUser: res.data.data.user});
      })
      .catch(err => {
        if(err.response){
          dispatch({ type: AUTH_FAILURE, errorMessage: 'Invalid Username/Password combination. Please try again.'});
        }
        else{
          dispatch({ type: AUTH_FAILURE, errorMessage: 'Cannot connect to server. Please try again.'});
        }
      })
  }
};
