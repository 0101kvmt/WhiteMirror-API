import { combineReducers } from 'redux';

import HomeReducer from './pages/home/reducer';
import MirrorReducer from './pages/mirror/reducer';
import AuthReducer from './pages/auth/reducer';

export default combineReducers({
  home: HomeReducer,
  auth: AuthReducer,
  mirror: MirrorReducer
});
