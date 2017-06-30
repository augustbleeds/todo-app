// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Go to sleep", "Eat burgers", "Blah"];

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        {dummyData.map((item)=>(<Todo task={item}/>))}
      </ul>
    )
  }
}

class Todo extends React.Component{
  render(){
    return (
      <li><button>X</button>{this.props.task}</li>
    )
  }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));
