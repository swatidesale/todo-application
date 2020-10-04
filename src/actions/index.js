import todosAPI from '../api/todo'

export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todosAPI.create(todo),
  }
}

export function getTodoList() {
  return {
    type: 'GET_TODO_LIST',
    payload: todosAPI.get(),
  }
}

export function updateTodo(oldTodo, newTodo) {
  return {
    type: 'UPDATE_TODO',
    payload: todosAPI.put(oldTodo, newTodo),
  }
}

export function deleteTodo(todo) {
  return {
    type: 'DELETE_TODO',
    payload: todosAPI.delete(todo),
  }
}



