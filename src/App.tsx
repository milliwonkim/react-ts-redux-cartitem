import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import './App.scss';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    );
}
