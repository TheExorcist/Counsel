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

const RootApp = () => {
  return ( <Provider store={store}>
            <App />
          </Provider> )
}


ReactDOM.render(
  <BrowserRouter>  
    <RootApp />
  </BrowserRouter>  , document.getElementById('root'));
registerServiceWorker();
