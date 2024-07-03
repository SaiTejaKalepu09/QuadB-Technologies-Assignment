//Todoinput Component
import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  //function handles input change state
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  //function add todo to list
  handleAddTodo = () => {
    if (this.state.inputValue.trim() === '') {
      alert('Enter valid text');
      return;
    }
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="todo-user-input"
          placeholder="What needs to be done?"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button className="button" onClick={this.handleAddTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
