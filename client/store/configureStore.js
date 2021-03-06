import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}


const configureStore = () => {
	const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  return store;
};

export default configureStore;
