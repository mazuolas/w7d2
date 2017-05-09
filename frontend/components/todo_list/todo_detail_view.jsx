import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);

  }

  removeTodo(e){
    e.preventDefault();

    this.props.deleteTodo(this.props.todo);
  }

  render(){
    return(
      <div>
        <p>{this.props.todo.body}</p>
        <button className="delete-button" onClick={this.removeTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
