import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteTodo from './DeleteTodo';

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.props.toggleHover(true);
  }

  handleMouseLeave() {
    this.props.toggleHover(false);
  }

  render() {
    return (
      <li
        className="todo-item"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <strong>{ this.props.todo }</strong>
        {
          this.props.toggleState &&
            <DeleteTodo
              todoIndex={this.props.todoIndex}
              deleteTodo={this.props.deleteTodo}
            />
        }
      </li>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.string,
  todoIndex: PropTypes.number
};
