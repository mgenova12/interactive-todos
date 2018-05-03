import update from 'immutability-helper';
import { ADD_TODO, DELETE_TODO } from '../actions/todos-actions';

export function todosReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return update(state, { $push: [payload.todos] });
    case DELETE_TODO:
      return update(state, { $splice: [[payload.todos, 1]] });
    default:
      return state;
  }
}
