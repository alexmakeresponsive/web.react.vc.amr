import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/pages/App/App';
import Home from './components/pages/Home/Home';
import Skills from './components/pages/Skills/Skills';
import About from './components/pages/About/About';
import Works from './components/pages/Works/Works';
import Work from './components/pages/Works/single/Work';
import Contacts from './components/pages/Contacts/Contacts';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter,
    Route,
    Redirect,
} from 'react-router-dom'

import reducerApp from './reducers';

const store = createStore(reducerApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//Show events
store.subscribe(()=>{
    console.log('subscribe', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <div>
                    <App />
                </div>

                <Route exact path='/' component={Home}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/about' component={About}/>
                <Route path='/works' component={Works} works={store}/>
                <Route path='/work/:id' component={Work}/>
                <Route path='/contacts' component={Contacts}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
