import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'
import {
  print1,
  print2,
  print3,
  loggerMiddleware,
} from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
