import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import  cartReducer  from './reducers/cartReducer'
import usersReducer from './reducers/usersReducer'
import * as UserActions from './actions/user'

const store = createStore( usersReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

ReactDOM.render(
    <Provider store={store} >
    <Router>
      <App store={store} />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
