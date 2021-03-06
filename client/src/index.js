import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const stores = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={stores}>
<App />
  </Provider>,  
  document.getElementById('root')
);

