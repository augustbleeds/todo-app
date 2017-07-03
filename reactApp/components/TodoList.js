import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  render(){
    return (
        <ul>
          {this.props.todos.map((item, index)=>(<Todo key={item['_id']} toggle={() => this.props.toggleComplete(item['_id'])} task={item} xClick={() => this.props.remove(item['_id'])}/>))}
        </ul>
    )
  }
}

export default TodoList
