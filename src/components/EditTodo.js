import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/image/edit';

export class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
    this.addInputs = this.addInputs.bind(this, this.props.todoIndex);
  }

  addInputs(index) {
    const inputs = this.state.inputs.concat(<input type="text" />);
    this.setState({ inputs });
    console.log(this.state.inputs);
    this.props.editTodo(index, 3);
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
