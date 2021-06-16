import {
    TRANSPORTER_LIST_REQUEST, TRANSPORTER_LIST_SUCCESS, TRANSPORTER_LIST_FAIL, TRANSPORTER_DETAILS_REQUEST, TRANSPORTER_DETAILS_SUCCESS, TRANSPORTER_DETAILS_FAIL} from '../constants/transporterConstant'



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

function transporterDetailsReducer(state = { transporter: {} }, action) {

    switch (action.type) {
        case TRANSPORTER_DETAILS_REQUEST:
            return { loading: true };
        case TRANSPORTER_DETAILS_SUCCESS:
            return { loading: false, transporter: action.payload };
        case TRANSPORTER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
export { transporterListReducer, transporterDetailsReducer };
