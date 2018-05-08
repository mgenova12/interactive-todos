import React, { Component } from 'react';


export class TodoItem extends Component {
  render() {
    return (
      <li className="todo-item">
        <strong>{ this.props.todo }</strong>
      </li>
    );
  }
}

export default TodoItem;
