import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addTodo, deleteTodo } from '../actions/todos-actions';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(event.target.todo.value);
    event.target.reset();
  }

  render() {
    const todos = this.props.todos.map((todo, index) =>
      (
        <li
          key={index}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {todo}
          {
            this.state.isHovering &&
            <span className="hoverEdit">
              Hovering right meow!
            </span>
          }
        </li>));

    return (
      <div className="form container-fluid">
        <form className="text-center" onSubmit={this.handleSubmit}>
          <TextField
            name="todo"
            floatingLabelText="Add Todo"
            autoComplete="off"
          />
        </form>
        <ol className="formcontainer">
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {todos}
          </CSSTransitionGroup>
        </ol>
      </div>
    );
  }
}

const todosSelector = createSelector(
  state => state.todos,
  todos => todos
);

const mapStateToProps = createSelector(
  todosSelector,
  todos => ({
    todos
  })
);

const mapActionsToProps = {
  onAddTodo: addTodo,
  onDeleteTodo: deleteTodo
};

export default connect(mapStateToProps, mapActionsToProps)(Form);


Form.propTypes = {
  todos: PropTypes.array,
  onAddTodo: PropTypes.func
};
