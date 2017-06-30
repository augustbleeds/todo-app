import React from 'react'

class Todo extends React.Component{
  render(){
    if(this.props.task.completed){
      return (
          <li>
            <button onClick={this.props.xClick} className="btn btn-default">X</button>
            <button onClick={this.props.toggle}><strike> {' ' + this.props.task.taskText}</strike> </button>
          </li>
      );
    }

    return (
      <li>
        <button onClick={this.props.xClick} className="btn btn-default">X</button>
        <button onClick={this.props.toggle}>{' ' + this.props.task.taskText}</button>
      </li>

  );
  }
}

export default Todo;
