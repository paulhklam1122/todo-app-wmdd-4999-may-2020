import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addTodo } from '../actions/todoActions'

import { v4 as uuidv4 } from 'uuid'

const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleChange = event => {
    setTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (todo.trim() === '') return
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        complete: false
      })
    )
    setTodo('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row className='align-items-center'>
        <Col md={9}>
          <Form.Control
            className='mb-2'
            onChange={handleChange}
            type='text'
            placeholder='i.e. Buy groceries'
            required
          />
        </Col>
        <Col>
          <Button type='submit' className='mb-2'>
            Add Todo
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default TodoInput
