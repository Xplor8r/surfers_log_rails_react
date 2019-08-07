import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers/rootReducer'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';


const middlewares = [thunk]

if(process.env.NODE_ENV !== "production"){
    middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.register();