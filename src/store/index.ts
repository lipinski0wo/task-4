import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form'

import { general } from './general/reducers'
import { users } from './users/reducers'
import { calculator } from './calculator/reducers'

const rootReducer = combineReducers({
  general,
  users,
  calculator,
  form: reduxFormReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  return store
}
