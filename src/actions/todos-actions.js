export const ADD_TODO = 'todos:addTodo';
export const DELETE_TODO = 'todos:deleteTodo';
export const EDIT_TODO = 'todos:editTodo';

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: {
      todos: newTodo
    }
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    payload: {
      todos: index
    }
  };
}

export function editTodo(index, input) {
  return {
    type: EDIT_TODO,
    payload: {
      indexs: index,
      inputs: input
    }
  };
}
