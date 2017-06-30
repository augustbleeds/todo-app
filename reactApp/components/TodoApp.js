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
  removeTodo(index){
    console.log('todos is', this.state.todos);
    dummyData.splice(index, 1);
    // let copyList = this.state.todos.slice();
    // let newList = copyList.slice(0, index).concat(copyList.slice(index+1));
    this.setState({
      todos: dummyData
    });
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
        <TodoList todos={this.state.todos} remove={(index) => this.removeTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
