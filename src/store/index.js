import { createStore } from 'redux'
import { reducer } from '../reducers/todoReducers'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: 'Go to the gym',
      complete: false
    },
    {
      id: uuidv4(),
      name: 'Do laundry',
      complete: true
    }
  ]
}

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
