import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
//import {Provider} from 'react-redux';
import './index.css';
import App from './App';
// import store from './store';

ReactDOM.render(

    <HashRouter>
            <App />
        </HashRouter>

, document.getElementById('root'));


// <Provider store={store}>
// </Provider>