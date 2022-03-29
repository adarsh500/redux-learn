import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import './api/server'

store.dispatch({ type: 'todos/todosAdded', payload: 'learn actions' });
store.dispatch({ type: 'todos/todosAdded', payload: 'learn actions' })
// store.getState()
console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
