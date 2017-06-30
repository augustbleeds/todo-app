import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  render(){
    return (
        <ul>
          {this.props.todos.map((item, index)=>(<Todo toggle={() => this.props.toggleComplete(index)} task={item} xClick={() => this.props.remove(index)}/>))}
        </ul>
    )
  }
}

export default TodoList
