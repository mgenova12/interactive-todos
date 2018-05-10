import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export class InputEdit extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted!');
  }


  render() {
    return (
      <form className="input-edit" onSubmit={this.handleSubmit}>
        <TextField
          name="todoEdit"
          autoComplete="off"
          style={{ width: 160 }}
        />
      </form>
    );
  }
}

export default InputEdit;
