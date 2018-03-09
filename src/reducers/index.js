// ROOT reducers


import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import postReducer from './post';



const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  postState: postReducer,
});

export default rootReducer;
