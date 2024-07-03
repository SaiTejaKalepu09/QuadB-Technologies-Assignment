//import of the libraries and Components
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

  //Maintaining list in state
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  //Dynamically gets the data without interferring the render
  componentDidMount() {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
    this.setState({ todoList: storedTodoList });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    }
  }
  //add to list function
  addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      uniqueNo: Date.now(),
      completed: false
    };
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, newTodo]
    }));
  };

  //delete item from list
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(todo => todo.uniqueNo !== todoId)
    }));
  };

  //Function to note whether task is done or not
  toggleTodo = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map(todo =>
        todo.uniqueNo === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  //Edit function to already saved todo
  editTodo = (todoId, newText) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map(todo =>
        todo.uniqueNo === todoId ? { ...todo, text: newText } : todo
      )
    }));
  };

  //function to save todolist to localStorage
  saveTodoList = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    alert('Todo list saved!');
  };


  //whole ui including components used
  render() {
    return (
      <div className="todos-bg-container">
        <div className='border-page'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <TodoInput addTodo={this.addTodo} />
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <TodoList 
                todoList={this.state.todoList} 
                deleteTodo={this.deleteTodo} 
                toggleTodo={this.toggleTodo}
                editTodo={this.editTodo}
              />
              <button className="button" onClick={this.saveTodoList}>Save</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

//exporting the component
export default App;
