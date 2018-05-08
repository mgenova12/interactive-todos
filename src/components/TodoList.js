import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem';

export class TodoList extends Component {
  render() {
    let todoItems;

    if (this.props.todos) {
      todoItems = this.props.todos.map((todo, index) =>
        (
          <TodoItem key={index} todo={todo} todoIndex={index} />
        ));
    }

    return (
      <div className="todo-list">
        <ol>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            { todoItems }
          </CSSTransitionGroup>
        </ol>
      </div>
    );
  }
}

export default TodoList;
