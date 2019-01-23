import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { store } from './redux';

import './index.scss';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
