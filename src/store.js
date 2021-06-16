import {createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from "redux-thunk";
import { transporterListReducer} from './reducers/transporterReducers'


const initialstate = {};

const reducer = combineReducers({
    transporterList: transporterListReducer,
    
  

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialstate, composeEnhancer(applyMiddleware(thunk)));
export default store;