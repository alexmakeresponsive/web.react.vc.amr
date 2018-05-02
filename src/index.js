import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
    Link,
} from 'react-router-dom'

import reducerApp from './reducers';

//Create srore( Redux Store )
const store = createStore(reducerApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Show events
store.subscribe(()=>{
    console.log('subscribe', store.getState());
});

//CRUD for store
// store.dispatch({
//     type: 'ADD_WORK',
//     payload: {
//         link:        '/works/work-4',
//         title:       'Title 4',
//         description: 'Some description 4',
//     }
// });

// store.dispatch({ type: 'ADD_WORK', payload: { title: 'Title 5', } });

//Form for add new work
//const btnAddNewWork = document.querySelector('#btnAddNewWork');
// btnAddNewWork.addEventListener('click', () => {
//     const workTitle = '';
// });




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/works' component={Works} works={store}/>
                <Route path='/contacts' component={Contacts}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




registerServiceWorker();
