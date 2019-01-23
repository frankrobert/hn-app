import {
  createStore,
  applyMiddleware,
  Middleware,
  compose,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';

const logger = createLogger({});

const middleware: Middleware[] = [thunk, promiseMiddleware()];

// Ensure logger is last in the middleware list and is not set in production
if (process.env.REACT_APP_ENV !== 'production') {
  middleware.push(logger);
}
const store: Store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

export { store };
