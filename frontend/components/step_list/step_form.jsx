import React from 'react';

class StepForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { title: "", body: ""};
    this.submitForm = this.submitForm.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    this.props.receiveStep(this.state);
  }

  titleChange(e){
    e.preventDefault();
    let title = document.getElementById('step-title').value;
    this.setState({title});
  }
  bodyChange(e){
    e.preventDefault();
    let body = document.getElementById('step-body').value;
    this.setState({body});
  }

  render(){
    return (
      <form className="step-form">
        <input placeholder="title" id='step-title' type="text" value={this.state.title} onChange={this.titleChange}/>
        <textarea placeholder="body" id='step-body' value={this.state.body} onChange={this.bodyChange} />
        <button className="step-button" onClick={this.submitForm}>Create step</button>
      </form>
    );
  }
}

export default StepForm;
