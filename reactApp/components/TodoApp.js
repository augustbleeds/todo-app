import React from 'react'
import InputLine from './InputLine'
import TodoList from './TodoList'

var dummyData = [{taskText: "Go to Sleep", completed: false}, {taskText: "Eat burgers", completed: false}, {taskText: "lah", completed: true}];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  addTodo(todoText){
    dummyData.push({taskText:todoText, completed:false})
    this.setState({todos: dummyData});
    console.log(this.state.todos);
  }
  componentDidMount(){
    this.setState({todos: dummyData})
  }
  render(){
    return(
      <div>
        <InputLine submit={(text) => this.addTodo(text) } />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
