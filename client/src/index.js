import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore'
import { BrowserRouter } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';

const store = configureStore()

const RootApp = (props) => {
  return ( <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider> )
}


ReactDOM.render(
  <RootApp />  , document.getElementById('root'));
registerServiceWorker();
