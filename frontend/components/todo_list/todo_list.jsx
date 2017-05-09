import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return (
    <div>

      <ul>
        {this.props.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} editTodo={this.props.editTodo}/>
        ))}
      </ul>
      <TodoForm addTodo={this.props.addTodo} errors={this.props.errors} clearErrors={this.props.clearErrors} />
    </div>
    );
  }
}

export default TodoList;
