import { combineReducers } from 'redux';

import HomeReducer from './pages/home/reducer';
import MirrorReducer from './pages/mirror/reducer';

export default combineReducers({
  home: HomeReducer,
  mirror: MirrorReducer
});
