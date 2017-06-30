// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: "Go to Sleep", completed: false}, {taskText: "Eat burgers", completed: false}, {taskText: "lah", completed: true}];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData})
  }

  render(){
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

class TodoList extends React.Component{
  render(){
    return (
        <ul>
          {this.props.todos.map((item)=>(<Todo task={item}/>))}
        </ul>
    )
  }
}

class Todo extends React.Component{
  render(){
    return this.props.task.completed ? (<li><button className="btn btn-default">X</button><strike>{' ' + this.props.task.taskText}</strike></li>) : (<li><button className="btn btn-default">X</button>{' ' + this.props.task.taskText}</li>)
  }
}

class InputLine extends React.Component{
  render(){
    return(
      <form className="form-inline">
        <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="task"/> <input className="btn btn-primary" type="submit" value="Add todo"/>
      </form>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
