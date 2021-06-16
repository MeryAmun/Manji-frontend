import {
    TRANSPORTER_LIST_REQUEST, TRANSPORTER_LIST_SUCCESS, TRANSPORTER_LIST_FAIL, } from '../constants/transporterConstant'



  function transporterListReducer(state = { transporters: [] }, action) {

    switch (action.type) {
        case TRANSPORTER_LIST_REQUEST:
            return { loading: true };
        case TRANSPORTER_LIST_SUCCESS:
            return { loading: false, transporters: action.payload };
        case TRANSPORTER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    };
}
export { transporterListReducer }
