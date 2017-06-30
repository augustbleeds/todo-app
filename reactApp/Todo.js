import React from 'react'

class Todo extends React.Component{
  render(){
    return this.props.task.completed ? (<li><button className="btn btn-default">X</button><strike>{' ' + this.props.task.taskText}</strike></li>) : (<li><button className="btn btn-default">X</button>{' ' + this.props.task.taskText}</li>)
  }
}

export default Todo;
