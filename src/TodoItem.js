import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: this.props.todo.text
    };
  }

  handleToggleTodo = () => {
    this.props.toggleTodo(this.props.todo.uniqueNo);
  };

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo.uniqueNo);
  };

  handleEditChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSaveEdit = () => {
    this.props.editTodo(this.props.todo.uniqueNo, this.state.editText);
    this.setState({ isEditing: false });
  };

  handleCancelEdit = () => {
    this.setState({ isEditing: false, editText: this.props.todo.text });
  };

  render() {
    const { todo } = this.props;
    return (
      <li className="todo-item-container d-flex flex-row" id={`todo${todo.uniqueNo}`}>
        <input
          type="checkbox"
          id={`checkbox${todo.uniqueNo}`}
          checked={todo.completed}
          onChange={this.handleToggleTodo}
          className="checkbox-input"
        />
        {this.state.isEditing ? (
          <div className="label-container d-flex flex-row">
            <input
              type="text"
              value={this.state.editText}
              onChange={this.handleEditChange}
              className="form-control"
            />
            <button className="btn btn-success btn-sm m-2" onClick={this.handleSaveEdit}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm m-2" onClick={this.handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="label-container d-flex flex-row">
            <label
              htmlFor={`checkbox${todo.uniqueNo}`}
              id={`label${todo.uniqueNo}`}
              className={`checkbox-label ${todo.completed ? 'checked' : ''}`}
            >
              {todo.text}
            </label>
            <div className="delete-icon-container">
              <i
                className="far fa-edit edit-icon"
                onClick={this.handleEdit}
              ></i>
              <i
                className="far fa-trash-alt delete-icon"
                onClick={this.handleDeleteTodo}
              ></i>
            </div>
          </div>
        )}
      </li>
    );
  }
}

export default TodoItem;
