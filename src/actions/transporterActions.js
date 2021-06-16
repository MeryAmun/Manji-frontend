import {
    TRANSPORTER_LIST_REQUEST, TRANSPORTER_LIST_SUCCESS, TRANSPORTER_LIST_FAIL, TRANSPORTER_DETAILS_REQUEST, TRANSPORTER_DETAILS_SUCCESS, TRANSPORTER_DETAILS_FAIL}
from '../constants/transporterConstant'
import axios from 'axios'


//list transporters action
const listTransporters = () => async (dispatch) => {
    try {
 
       dispatch({ type: TRANSPORTER_LIST_REQUEST });
       const { data } = await axios.get('http://127.0.0.1:3500/api/transporters');
       dispatch({ type: TRANSPORTER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
       dispatch({ type: TRANSPORTER_LIST_FAIL, payload: error.message });
    }
   }
//transporters details action
const detailsTransporter = (transporterId) => async (dispatch) => {
 
   try {
      dispatch({ type: TRANSPORTER_DETAILS_REQUEST, payload: transporterId });
      const { data } = await axios.get('/api/transporters/' + transporterId);
      dispatch({ type: TRANSPORTER_DETAILS_SUCCESS, payload: data });
   }
   catch (error) {
      dispatch({ type: TRANSPORTER_DETAILS_FAIL, payload: error.message })
   }
}


export { listTransporters, detailsTransporter }