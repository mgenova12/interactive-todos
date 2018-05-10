import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/image/edit';
import InputEdit from './InputEdit';

export class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.addInputs = this.addInputs.bind(this, this.props.todoIndex);
  }

  addInputs(index) {
    this.props.editTodo(index, <InputEdit />);
  }


  render() {

    return (
      <div className="edit-todo">
        <FloatingActionButton
          secondary={true}
          iconStyle={{ width: '35px', height: '35px' }}
          onClick={this.addInputs}
        >
          <ContentEdit
            style={{ width: '20px' }}
          />
        </FloatingActionButton>
      </div>
    );
  }
}

export default EditTodo;
