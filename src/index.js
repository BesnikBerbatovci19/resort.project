import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RoomsProvaider} from './context'

ReactDOM.render(
    <RoomsProvaider>
        <Router>
            <App />
        </Router>
    </RoomsProvaider>

 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
