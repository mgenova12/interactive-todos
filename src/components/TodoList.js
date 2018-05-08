import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { CSSTransitionGroup } from 'react-transition-group';

export class TodoList extends Component {
  render() {
    let todoItems;

    if (this.props.todos) {
      todoItems = this.props.todos.map((todo, index) => {
        return (
          <TodoItem key={index} todo={todo}/>
        )
      });
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
