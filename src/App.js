import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Provider } from 'react-redux'
import { store } from './store/index'

import Container from 'react-bootstrap/Container'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <Provider store={store}>
      <Container fluid className='todo-container'>
        <TodoInput />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
