import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(event.target.todo.value);
    event.target.reset();
  }

  render() {
    return (
      <div className="input-todo">
        <form className="text-center" onSubmit={this.handleSubmit}>
          <TextField
            name="todo"
            floatingLabelText="Add Todo"
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}


export default InputTodo;
