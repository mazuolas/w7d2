import {connect} from 'react-redux';
import TodoList from './todo_list';
import {addTodo, receiveTodos, removeTodo, updateTodo, fetchTodos, editTodo} from "../../actions/todo_actions";
import {allTodos} from '../../reducers/selectors';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors()),
  editTodo: (todo) => dispatch(editTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
