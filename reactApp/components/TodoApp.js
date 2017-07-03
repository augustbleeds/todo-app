import React from 'react'
import axios from 'axios'
import InputLine from './InputLine'
import TodoList from './TodoList'

const dbUrl = "http://localhost:3000/db";

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
    // dummyData.push({taskText:todoText, completed:false})
    // this.setState({todos: dummyData});
    // console.log(this.state.todos);

    let self = this;
    // post to server
    axios.post(dbUrl + '/add', {taskText: todoText})
      .then(function(response){
        self.setState({todos: self.state.todos.concat(response.data)});
        console.log('response is', response.data);
        console.log('todos are', self.state.todos)
      })
      .catch(function(err){
        console.log(err);
      });

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
