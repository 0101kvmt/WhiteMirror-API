import axios from 'axios';

import { USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE, VALIDATE_TOKEN_REQUEST, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAILURE, LOGOUT_SUCCESS, NEWUSER_FAILURE, NEWUSER_REQUEST, NEWUSER_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types';

const apiUrl = "https://whitemirr0r.herokuapp.com/v1/" ;

////////////////////////////////////////////////////////////
//                       New User                         //
////////////////////////////////////////////////////////////


export const newUser = (username, password) => {

  const newUserConfiguration = {
    url: apiUrl + "user",
    method: 'post',
    payload: {
      "username": username,
      "password": password
    }

  }

  return dispatch => {
    dispatch({ type: NEWUSER_REQUEST });
    return axios.post(newUserConfiguration.url, newUserConfiguration.payload)
      .then(res => {
        dispatch({ type: NEWUSER_SUCCESS, currentUser: res.data.data.user, token: res.data.data.token, tokenUser: res.data.data.user._id});
      })
      .catch(err => {
        if(err.response){
          dispatch({ type: NEWUSER_FAILURE, errorMessage: err.response});
        }
        else{
          dispatch({ type: NEWUSER_FAILURE, errorMessage: 'Cannot connect to server. Please try again.'});
        }
      })
  }
};


export const logOut = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_SUCCESS, currentUser: null, token: '', tokenUser: ''});
  }
};

////////////////////////////////////////////////////////////
//                     Authenticate                       //
////////////////////////////////////////////////////////////

export const authenticate = (username, password) => {

  const authConfiguration = {
    url: apiUrl + "auth",
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
        dispatch({ type: AUTH_SUCCESS, currentUser: res.data.data.user, token: res.data.data.token, tokenUser: res.data.data.user._id});
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

////////////////////////////////////////////////////////////
//                    validateToken                       //
////////////////////////////////////////////////////////////


export const validateToken = authToken => async (dispatch) => {
  const tokenConfig = {
    url: apiUrl + 'verify/' + authToken,
    config:
      { headers: {'Authorization': 'Bearer ' + authToken}}
  }

  dispatch({ type: VALIDATE_TOKEN_REQUEST });
  try {
    let { data } = await axios(tokenConfig.url, tokenConfig.config);
    dispatch({ type: VALIDATE_TOKEN_SUCCESS, validToken: data.data.valid, token: authToken, tokenUser: data.data.decoded.id })
  } catch (err) {
    dispatch({ type: VALIDATE_TOKEN_FAILURE, errorMessage: err.response })
  }
};

////////////////////////////////////////////////////////////
//                    Get User Data                       //
////////////////////////////////////////////////////////////


export const getUserData = (authToken, userId) => async (dispatch) => {
  console.log("user", userId);
  const userConfig = {
    url: apiUrl + 'user/' + userId,
    config:
      { headers: {'Authorization': 'Bearer ' + authToken}}
  }

  dispatch({ type: USER_GET_REQUEST });
  try {
    let { data } = await axios(userConfig.url, userConfig.config);
    dispatch({ type: USER_GET_SUCCESS, currentUser: data.data.user, errorMessage: '' })
  } catch (err) {
    dispatch({ type: USER_GET_FAILURE, errorMessage: err.response })
  }
};
