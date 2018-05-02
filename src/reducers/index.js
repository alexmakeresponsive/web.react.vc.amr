import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import skills from './skills';
import works  from './works';
import worksFind  from './worksFind';


export default combineReducers({
    routing: routerReducer,
    works,
    skills,
    worksFind
})