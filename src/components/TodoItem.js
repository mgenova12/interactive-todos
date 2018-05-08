import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.todoIndex);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseEnter(index) {
    console.log(index);
    const { isHovering } = this.state.isHovering;
    this.setState({ isHovering: !isHovering });
  }

  handleMouseLeave() {
    console.log('hi');
  }

  render() {
    return (
      <li
        className="todo-item"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <strong>{ this.props.todo }</strong>
      </li>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.isRequired
};
