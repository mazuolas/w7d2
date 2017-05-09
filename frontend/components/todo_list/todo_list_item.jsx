import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = { detail: false };
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  updateDetail(e){
    e.preventDefault();
    if (this.state.detail) {
      this.setState({ detail: false });
    }
    else{
      this.setState({ detail: true });
    }
  }

  showDetails(){
    if (this.state.detail){
      return (<TodoDetailViewContainer todo={this.props.todo}/>);
    } else{
      return "";
    }
  }


  updateTodo(e){
    e.preventDefault();
    this.props.editTodo(this.props.todo);
  }

  render(){
    if (this.props.todo.done) {
      this.text = 'Undo';
    } else{
      this.text = 'Done';
    }
    return(

      <li className = "item">
        <section className="header">
          <h3 className='todo' onClick={this.updateDetail}>{this.props.todo.title}</h3>
          <button className="done-button" onClick={this.updateTodo}>{this.text}</button>
        </section>

        <section className="details">
          {this.showDetails()}
        </section>
      </li>

    );
  }
}

export default TodoListItem;
