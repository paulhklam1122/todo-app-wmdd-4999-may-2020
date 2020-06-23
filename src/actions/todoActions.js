import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types'

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId
})

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: todoId
})
