export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const UPDATE_STEP = "UPDATE_STEP";

export function receiveSteps(steps){
  return {
    type: RECEIVE_STEPS,
    steps
  };
}

export function receiveStep(step){
  return {
    type: RECEIVE_STEP,
    step
  };
}

export function removeStep(step){
  return {
    type: REMOVE_STEP,
    step
  };
}

export function updateStep(step){
  return {
    type: UPDATE_STEP,
    step
  };
}
