import { USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE, VALIDATE_TOKEN_REQUEST, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAILURE, LOGOUT_SUCCESS, NEWUSER_FAILURE, NEWUSER_REQUEST, NEWUSER_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types';

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
  currentUser: null,
  token: '',
  tokenUser: '',

};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

// New User
    case NEWUSER_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false };
    case NEWUSER_SUCCESS:
      return { ...state, isRequesting: false, currentUser: action.currentUser, token: action.token, tokenUser: action.tokenUser, isAuthenticated: true };
    case NEWUSER_FAILURE:
      return { ...state, isRequesting: false, isAuthenticated: false};

// User Get
    case USER_GET_REQUEST:
      return { ...state, isRequesting: true};
    case USER_GET_SUCCESS:
      return { ...state, isRequesting: false, currentUser: action.currentUser, errorMessage: action.errorMessage, isAuthenticated: true};
    case USER_GET_FAILURE:
      return { ...state, isRequesting: false, errorMessage: action.errorMessage};

// Validate Token
    case VALIDATE_TOKEN_REQUEST:
      return { ...state, isRequesting: true };
    case VALIDATE_TOKEN_SUCCESS:
      return { ...state, validToken: action.validToken, token: action.token, tokenUser: action.tokenUser, isRequesting: false, isAuthenticated: true, errorMessage: action.errorMessage };
    case VALIDATE_TOKEN_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };

// Auth Request
    case AUTH_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false };
    case AUTH_SUCCESS:
      return { ...state, isRequesting: false, currentUser: action.currentUser, token: action.token, tokenUser: action.tokenUser, isAuthenticated: true };
    case AUTH_FAILURE:
      return { ...state, isRequesting: false, isAuthenticated: false};
// Logout
    case LOGOUT_SUCCESS:
      return {...state, isRequesting: false, isAuthenticated: false, currentUser: action.currentUser, token: action.token, tokenUser: action.tokenUser}
    default:
      return state;
  }
};
