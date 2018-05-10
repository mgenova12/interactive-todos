import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodoList extends Component {
  render() {
    let todoItems;

    if (this.props.todos) {
      todoItems = this.props.todos.map((todo, index) =>
        (
          <TodoItem
            key={index}
            todo={todo}
            todoIndex={index}
            deleteTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
          />
        ));
    }

    return (
      <div className="todo-list">
        <ol>
          <CSSTransitionGroup
            transitionName="todo-list-item"
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

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func
};