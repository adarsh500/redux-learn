import React from 'react'

import TodoListItem from './TodoListItem'

function TodoList() {
  const todos = []

  const renderedItems = todos.map((todo) => (
    <TodoListItem key={todo.id} value={todo} />
  ))
  return <div></div>
}

export default TodoList
