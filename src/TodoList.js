//List that calls all todo items
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-items-container" id="todoItemsContainer">
        {this.props.todoList.map(todo => (
          <TodoItem
            key={todo.uniqueNo}
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
