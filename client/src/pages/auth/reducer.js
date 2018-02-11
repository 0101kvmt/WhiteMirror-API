import { VALIDATE_TOKEN_REQUEST, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAILURE, LOGOUT_SUCCESS, NEWUSER_FAILURE, NEWUSER_REQUEST, NEWUSER_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types';

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
  currentUser: null,
  token: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEWUSER_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false };
    case NEWUSER_SUCCESS:
      return { ...state, isRequesting: false, currentUser: action.currentUser, token: action.token, isAuthenticated: true };
    case NEWUSER_FAILURE:
      return { ...state, isRequesting: false, isAuthenticated: false};
    case VALIDATE_TOKEN_REQUEST:
      return { ...state, isRequesting: true };
    case VALIDATE_TOKEN_SUCCESS:
      return { ...state, validToken: action.validToken, token: action.token, currentUser: action.currentUser, tokenUser: action.tokenUser.id, isRequesting: false, isAuthenticated: true };
    case VALIDATE_TOKEN_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    case AUTH_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false };
    case AUTH_SUCCESS:
      return { ...state, isRequesting: false, currentUser: action.currentUser, token: action.token, isAuthenticated: true };
    case AUTH_FAILURE:
      return { ...state, isRequesting: false, isAuthenticated: false};
    case LOGOUT_SUCCESS:
      return {...state, isRequesting: false, isAuthenticated: false, currentUser: action.currentUser}
    default:
      return state;
  }
};
