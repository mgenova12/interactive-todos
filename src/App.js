import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addTodo, deleteTodo } from './actions/todos-actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(event.target.todo.value);
    event.target.reset();
  }

  render() {
    const todos = this.props.todos.map((todo, index) => <p key={index}>{todo}</p>);

    return (
      <div className="App">
        <h1>The Coolest Todo App</h1>
        <MuiThemeProvider>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="todo"
              floatingLabelText="Add Todo"
              autoComplete="off"
            />
          </form>
        </MuiThemeProvider>
        { todos }
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


export default connect(mapStateToProps, mapActionsToProps)(App);

App.propTypes = {
  todos: PropTypes.array,
  onAddTodo: PropTypes.func
};

