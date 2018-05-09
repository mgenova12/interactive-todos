import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { addTodo, deleteTodo } from './actions/todos-actions';
import { toggleHover } from './actions/hover-actions';
import Header from './components/Header';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Header />
            <InputTodo addTodo={this.props.onAddTodo} />
            <TodoList
              todos={this.props.todos}
              deleteTodo={this.props.onDeleteTodo}
              toggleHover={this.props.onToggleHover}
              toggleState={this.props.isHovering}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const todosSelector = createSelector(
  state => state.todos,
  todos => todos
);

const hoverSelector = createSelector(
  state => state.isHovering,
  isHovering => isHovering
);

const mapStateToProps = createSelector(
  todosSelector,
  hoverSelector,
  (todos, isHovering) => ({
    todos,
    isHovering
  })
);

const mapActionsToProps = {
  onAddTodo: addTodo,
  onDeleteTodo: deleteTodo,
  onToggleHover: toggleHover
};

export default connect(mapStateToProps, mapActionsToProps)(App);

App.propTypes = {
  todos: PropTypes.array,
  onAddTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
};

