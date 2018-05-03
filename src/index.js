import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Works from './routes/Works';
import Work from './routes/Work';
import Contacts from './routes/Contacts';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

import {
    Router,
} from 'react-router'

import createHashHistory from 'history/createHashHistory';
// import createBrowserHistory from 'history/createBrowserHistory';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducerApp from './reducers';



//Create srore( Redux Store )
const store = createStore(reducerApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Create history
const hashHistory = createHashHistory();
// const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(hashHistory, store);


//Show events
store.subscribe(()=>{
    console.log('subscribe', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
                <Route path='/home/' component={Home}/>
                <Route path='/about/' component={About}/>
                <Route path='/works/' component={Works} works={store}/>
                <Route path='/work/:id/' component={Work}/>
                <Route path='/contacts/' component={Contacts}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




registerServiceWorker();
