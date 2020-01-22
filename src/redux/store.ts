  
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ducks from './ducks'
import sagas from './sagas'

const middleware = createSagaMiddleware()

const store = createStore(ducks, applyMiddleware(middleware))

middleware.run(sagas)

export default store