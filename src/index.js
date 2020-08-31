import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers/reducers";
import tachyons from "tachyons";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();

const rootReducer = combineReducers({ requestRobots, searchRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
