import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { title: "", body: ""};
    this.submitForm = this.submitForm.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }
  submitForm(e){

    e.preventDefault();
    this.props.addTodo(this.state).then(() => (
      this.setState({ title: "", body: ""})
    )).then(this.props.clearErrors());
  }

  titleChange(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    this.setState({title});
  }
  bodyChange(e){
    e.preventDefault();
    let body = document.getElementById('body').value;
    this.setState({body});
  }

  render(){
    return (
      <form className="todoForm">
        <p className="error">{this.props.errors.join(", ")}</p>
        <input placeholder="title" id='title' type="text" value={this.state.title} onChange={this.titleChange}/>
        <textarea placeholder="body" id='body' value={this.state.body} onChange={this.bodyChange} />
        <button className="form-button" onClick={this.submitForm}>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
