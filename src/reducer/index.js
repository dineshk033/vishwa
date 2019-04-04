import {combineReducers} from 'redux';

import {ProductItems} from '../api/list';

const fetchProducts=(state=ProductItems,action)=>{
    return state;
}

export default combineReducers({Items:fetchProducts});