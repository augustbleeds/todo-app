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

  toggleTodo(index){
    //modify database
    dummyData[index].completed = !dummyData[index].completed;

    this.setState({
      todos: dummyData
    });
  }

  removeTodo(index){
    console.log('todos is', this.state.todos);
    // modify database
    dummyData.splice(index, 1);

    this.setState({
      todos: dummyData
    });
  }
  addTodo(todoText){
    // modify database
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
        <TodoList toggleComplete={(index) => this.toggleTodo(index)} todos={this.state.todos} remove={(index) => this.removeTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
