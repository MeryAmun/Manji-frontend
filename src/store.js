import {createStore, combineReducers} from 'redux';
import { transporterListReducer} from './reducers/transporterListReducer'


const initialstate = {};

const reducer = combineReducers({
    transporterList: transporterListReducer,
    
  

});

const store = createStore(initialstate, reducer);
export default store;