import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export class InputEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this, this.props.todoIndex);
  }

  handleSubmit(index, event) {
    event.preventDefault();
    this.props.editTodo(index, event.target.todoEdit.value);
  }


  render() {
    return (
      <form className="input-edit" onSubmit={this.handleSubmit}>
        <TextField
          name="todoEdit"
          autoComplete="off"
          style={{ width: 160, height: 40 }}
        />
      </form>
    );
  }
}

export default InputEdit;
