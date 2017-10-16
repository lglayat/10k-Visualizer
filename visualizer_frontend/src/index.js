import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import './index.css';
import thunk from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import usersReducer from './reducers/usersReducer'
import {autoRehydrate, persistStore } from 'redux-persist'


const store = createStore( usersReducer , composeWithDevTools(applyMiddleware(thunk), autoRehydrate()))

persistStore(store)

ReactDOM.render(
    <Provider store={store} >
    <Router>
      <App store={store} />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
