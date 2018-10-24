import { combineReducers } from 'redux';
import { SET_USER } from '../actions/AuthenticationActions';

const Authentication = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        // ...action.payload
        user: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  Authentication
});
