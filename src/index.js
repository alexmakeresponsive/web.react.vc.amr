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
    Link
} from 'react-router-dom'


const initialState = [
    {
        link:        '/works/work-1',
        title:       'Title 1',
        description: 'Some description 1'
    },
    {
        link:        '/works/work-2',
        title:       'Title 2',
        description: 'Some description 2'
    },
    {
        link:        '/works/work-3',
        title:       'Title 3',
        description: 'Some description 3'
    }
];


function works(state=initialState, action) {
    // console.log(action);

    if (action.type === 'ADD_WORK') {
        return [
            ...state,
            action.work
        ]
    }

    return state;
}

const store = createStore(works);

// console.log(store.getState());

store.subscribe(()=>{
    console.log('subscribe', store.getState());
});

// store.dispatch({ type: 'ADD_WORK', work: 'Title of some work 1' });
// store.dispatch({ type: 'ADD_WORK', work: 'Title of some work 2' });




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
