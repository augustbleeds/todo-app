import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  render(){
    return (
        <ul>
          {this.props.todos.map((item)=>(<Todo task={item}/>))}
        </ul>
    )
  }
}

export default TodoList
