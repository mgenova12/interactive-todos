export const ADD_TODO = 'todos:addTodo';
export const DELETE_TODO = 'todos:index';

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

