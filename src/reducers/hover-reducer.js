import update from 'immutability-helper';
import { TOGGLE_HOVER } from '../actions/hover-actions';

export function hoverReducer(state = [], { type, payload }) {
  switch (type) {
    case TOGGLE_HOVER:
      return update(state, { $set: payload.isHovering });
    default:
      return state;
  }
}
