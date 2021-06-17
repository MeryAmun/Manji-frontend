import Axios from 'axios';
import Cookie from 'js-cookie';
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL} from '../constants/userConstant'


const signIn = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password} });
try {
    const {data} = await Axios.post("http://127.0.0.1:3500/api/users/signin", {email, password} );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
    Cookie.set("userInfo", JSON.stringify(data));
} catch (error){
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message});
}
}


export {signIn}