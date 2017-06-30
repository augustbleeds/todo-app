// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: "Go to Sleep", completed: false}, {taskText: "Eat burgers", completed: false}, {taskText: "lah", completed: true}];



class TodoList extends React.Component{
  render(){
    return (
      <div>
        <InputLine />
        <ul>
          {dummyData.map((item)=>(<Todo task={item}/>))}
        </ul>
      </div>
    )
  }
}

class Todo extends React.Component{
  render(){
    return this.props.task.completed ? (<li><button>X</button><strike>{this.props.task.taskText}</strike></li>) : (<li><button>X</button>{this.props.task.taskText}</li>) 
  }
}

class InputLine extends React.Component{
  render(){
    return(
      <div>
        <input type="text" placeholder="task"/> <input type="submit" value="Add todo"/>
      </div>
    )
  }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));
