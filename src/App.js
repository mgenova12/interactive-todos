import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { addTodo, deleteTodo } from './actions/todos-actions';
import Header from './components/Header';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <InputTodo addTodo={this.props.onAddTodo} />
          <TodoList todos={this.props.todos} />
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

