import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { todosReducer } from './reducers/todos-reducer';
import { hoverReducer } from './reducers/hover-reducer';

const allReducers = combineReducers({
  todos: todosReducer,
  isHovering: hoverReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers, {
    todos: [],
    isHovering: false
  },
  allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
