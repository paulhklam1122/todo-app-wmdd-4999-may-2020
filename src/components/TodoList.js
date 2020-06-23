import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

import { deleteTodo, toggleTodo } from '../actions/todoActions'

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleCheckboxClick = todoId => {
    dispatch(toggleTodo(todoId))
  }

  const handleDeleteButtonClick = todoId => {
    const result = window.confirm('Are you sure you want to delete this todo?')
    if (result) {
      dispatch(deleteTodo(todoId))
    }
  }

  return (
    <ListGroup variant='flush'>
      {todos.map(todo => (
        <ListGroup.Item key={todo.id}>
          <Row className='align-items-center'>
            <Col>
              <Form.Check
                checked={todo.complete}
                onClick={() => handleCheckboxClick(todo.id)}
                type='checkbox'
              />
            </Col>
            <Col
              style={{
                textDecoration: todo.complete ? 'line-through' : 'none'
              }}
              md='7'
            >
              {todo.name}
            </Col>
            <Col>
              <Button
                onClick={() => handleDeleteButtonClick(todo.id)}
                variant='outline-danger'
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TodoList
