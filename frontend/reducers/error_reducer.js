import {CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';


const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case CLEAR_ERRORS:
      return [];

    case RECEIVE_ERRORS:
      return action.errors;

    default:
      return state;
  }

};

export default errorReducer;
