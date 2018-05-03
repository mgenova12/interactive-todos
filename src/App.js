import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addTodo, deleteTodo } from './actions/todos-actions';
import './App.css';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.todo.value);
    this.props.onAddTodo(event.target.todo.value);
  }

  deleteTodos(id) {
    const index = this.props.todos.findIndex(x => x.id === id);
    this.props.onDeleteTodo(index);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App!!</h1>
        <MuiThemeProvider>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              name="todo"
              floatingLabelText="Add Todo"
            />
          </form>
        </MuiThemeProvider>
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
  (todos) => ({
    todos
  })
);

const mapActionsToProps = {
  onAddTodo: addTodo,
  onDeleteTodo: deleteTodo
};


export default connect(mapStateToProps, mapActionsToProps)(App);

