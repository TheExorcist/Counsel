import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {

    const store = compose(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(logger),
    )(createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    rootSaga.map((saga) => sagaMiddleware.run(saga)) 
    return store;
  }
  
export default configureStore;