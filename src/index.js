import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import { reduxFirestore, getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
import firebase from './config/'

const Store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase)
   ))

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
