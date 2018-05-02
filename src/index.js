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


const initialState = {
    skills: {
        adminSkills:            [
            'Ubuntu',
            'Debian',
            'Fedora',
            'Mac OS X',
            'Windows',
        ],
        backendSkills:          [
            'MySQL'
        ],
        frontendSkills:         {
            markup: [
                'HTML5',
                'CSS3',
                'LESS',
                'SASS',
                'Stylus',
                'SVG',
            ],
            javascript: [
                'AMD',
                'UMD',
                'CommonJS',
                'ES6 modules',
            ]
        },
        envSkills: [
            'Grunt',
            'Gulp',
            'Webpack',
        ],
        programmLanguafeSkills: {
            backend: [
                'PHP',
            ],
            frontend: [
                'JavaScript'
            ]
        },
        cmsSkills: [
            'Wordpress',
            'Wordpress + Woocommerce',
            'Magento 1',
            'Magento 2',
            'OpenCart',
        ],
        frameworksSkills: [
            'Yii 1',
        ],
        libsSkills: [
            'NodeJS',
            'ReactJS',
            'RequireJS',
        ]
    },
    works: [
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
        },
    ],
};




//This is reducer
function reducerApp(state=initialState, action) {
    if (action.type === 'ADD_WORK') {
        return {
            ...state,
            works: [...state.works, action.payload]
        }
    }

    return state;
}

//Create srore( Redux Store )
const store = createStore(reducerApp);

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
