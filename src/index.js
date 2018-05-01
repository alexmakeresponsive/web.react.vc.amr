import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Works from './routes/Works';
import Contacts from './routes/Contacts';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'




ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/works' component={Works}/>
            <Route path='/contacts' component={Contacts}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);


registerServiceWorker();
