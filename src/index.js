import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import RootReducers from "./store/reducers/RootReducers";
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore } from "redux-firestore";
import {reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbconfig from './config/firebaseConfig';
const store = createStore(
  RootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
