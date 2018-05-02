import { combineReducers } from 'redux';

import skills from './skills';
import works  from './works';
import worksFind  from './worksFind';


export default combineReducers({
    works,
    skills,
    worksFind
})