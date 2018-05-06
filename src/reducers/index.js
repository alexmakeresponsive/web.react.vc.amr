import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import education from './education';
import experience from './experience';
import skills from './skills';
import works  from './works';
import worksFind  from './worksFind';
import socialnetworks  from './socialnetworks';
import contactsitems  from './contactsitems';


export default combineReducers({
    routing: routerReducer,
    works,
    skills,
    worksFind,
    education,
    experience,
    socialnetworks,
    contactsitems,
})