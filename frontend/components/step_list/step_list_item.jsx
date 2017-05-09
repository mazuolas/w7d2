import React from 'react';

class StepListItem extends React.Component{
  constructor(props){
    super(props);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  updateStatus(e){
    e.preventDefault();
    this.props.updateStep(this.props.step);

  }


  render(){
    if (this.props.step.done) {
      this.text = 'Undo';
    } else{
      this.text = 'Done';
    }

    return(
      <li>{this.props.step.title}
          <br/>
          {this.props.step.body}
          <br/>
          <button onClick={this.updateStatus}>{this.text}</button>
          <button onClick={this.deleteStep}>Delete</button>
      </li>
    );
  }
}
