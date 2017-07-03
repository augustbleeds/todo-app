import React from 'react'
import axios from 'axios'
import InputLine from './InputLine'
import TodoList from './TodoList'

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  toggleTodo(toggleId){
    let self = this;
    axios.post(dbUrl + '/toggle', {toggleId: toggleId})
      .then(function(response){
        self.setState({todos: response.data})
      })
      .catch(function(err){
        console.log('unable to toggle data', err);
      })
  }

  removeTodo(removeId){
    let self = this;
    axios.post(dbUrl + '/remove', {removeId: removeId})
      .then(function(response){
        self.setState({todos: response.data});
      })
      .catch(function(err){
        console.log('unable to remove data', err);
      });


  }
  addTodo(todoText){
    let self = this;
    axios.post(dbUrl + '/add', {taskText: todoText})
      .then(function(response){
        self.setState({todos: self.state.todos.concat(response.data)});
      })
      .catch(function(err){
        console.log(err);
      });
  }
  componentDidMount(){
    let self = this;
    axios.get(dbUrl + '/all')
      .then(function(response){
        self.setState({todos: response.data});
      })
      .catch(function(err){
        console.log('error retrieving data from mongoDB', err);
      });
  }
  render(){
    return(
      <div>
        <InputLine submit={(text) => this.addTodo(text) } />
        <TodoList toggleComplete={(toggleId) => this.toggleTodo(toggleId)} todos={this.state.todos} remove={(removeId) => this.removeTodo(removeId)}/>
      </div>
    )
  }
}

export default TodoApp;
