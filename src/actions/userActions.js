import Axios from 'axios';
import Cookie from 'js-cookie';
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,USER_LOGOUT_REQUEST,USER_LOGOUT_SUCCESS,USER_LOGOUT_FAIL, USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from '../constants/userConstant'


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


 const signout = () => {
    return async dispatch => {

        dispatch({ type: USER_LOGOUT_REQUEST });
        const res = await Axios.post("http://127.0.0.1:3500/api/users/signout");

        if(res.status === 200){
            localStorage.clear();
            dispatch({ type:USER_LOGOUT_SUCCESS });
        }else{
            dispatch({
                type: USER_LOGOUT_FAIL,
                payload: { error: res.data.error }
            });
        }


        localStorage.clear();
        dispatch({ type:USER_LOGOUT_SUCCESS });
        //const res = await axios.post(`/admin/signout`);
        // if(res.status === 200){

        // }else{
        //     dispatch({
        //         type: authConstants.USER_LOGOUT_FAILURE,
        //         payload: { error: res.data.error }
        //     });
        // }  
    }
} 
const register = (name, email, telephone, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, telephone, password} });
try {
    const {data} = await Axios.post("http://127.0.0.1:3500/api/users/register", { name, email,telephone, password} );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data});
    Cookie.set("userInfo", JSON.stringify(data));
} catch (error){
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message});
}

}



export {signIn, register, signout}