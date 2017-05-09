import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, UPDATE_STEP} from '../actions/step_actions.js';
import merge from 'lodash/merge';

const initialState = {

  1: {
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1
  }

};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState ={};
  switch(action.type){
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;

    case RECEIVE_STEPS:
      action.steps.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;

    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;

      case UPDATE_STEP:
        newState = merge({}, state);
        newState[action.step.id].done ? newState[action.step.id].done = false : newState[action.step.id].done = true;

        return newState;

    default:
      return state;
  }
};
export default stepsReducer;
