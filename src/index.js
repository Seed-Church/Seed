import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

