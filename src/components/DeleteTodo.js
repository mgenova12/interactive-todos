import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDelete from 'material-ui/svg-icons/action/delete';

export class DeleteTodo extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this, this.props.todoIndex);
  }

  deleteTodo(index) {
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <div className="delete-todo">
        <FloatingActionButton
          secondary={true}
          iconStyle={{ width: '35px', height: '35px' }}
          onClick={this.deleteTodo}

        >
          <ContentDelete
            style={{ width: '20px' }}
          />
        </FloatingActionButton>
      </div>
    );
  }
}

export default DeleteTodo;
