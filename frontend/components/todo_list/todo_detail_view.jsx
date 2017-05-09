import React from 'react';
import StepListContainer from '../step_list/step_list_container';


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
        <StepListContainer />
        <button className="delete-button" onClick={this.removeTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
