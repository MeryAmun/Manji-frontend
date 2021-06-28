import {createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from "redux-thunk";
import Cookie from 'js-cookie';
import { transporterListReducer, transporterDetailsReducer, transporterSaveReducer} from './reducers/transporterReducers';
import { userSigninReducer, userRegisterReducer} from './reducers/userReducer';

const userInfo = Cookie.getJSON("userInfo") || [null];

const initialstate = {  userSignin: { userInfo } };

const reducer = combineReducers({
    transporterList: transporterListReducer,
    transporterDetails: transporterDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    transporterSave: transporterSaveReducer
    
  

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialstate, composeEnhancer(applyMiddleware(thunk)));
export default store;