import {connect} from 'react-redux';
import StepList from './step_list';
import {receiveStep, removeStep, receiveSteps} from "../../actions/step_actions";
import {stepsByTodoId} from '../../reducers/selectors';

const mapStateToProps = (state, todoId) => ({
  steps: stepsByTodoId(state, todoId),
  todoId: todoId
});

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step)),
  receiveSteps: (step) => dispatch(receiveSteps(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
