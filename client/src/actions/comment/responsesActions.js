import axios from 'axios';
import {
  FETCH_RESPONSES_REQUEST,
  FETCH_RESPONSES_SUCCESS,
  FETCH_RESPONSES_FAILURE,
} from '../../constants/ActionTypes'


const fetchResponsesRequest = () => {
  return {
    type: FETCH_RESPONSES_REQUEST
  }
}

const fetchResponsesSucess = responses => {
    return {
        type: FETCH_RESPONSES_SUCCESS,
        payload: responses
    }
}

const fetchResponsesFailure = error => {
    return {
        type: FETCH_RESPONSES_FAILURE,
        payload: error
    }
}


export const fetchResponses = (id) => {
  return function(dispatch, getState) {
    if (getState().comment.responses.length === 0) {
      dispatch(fetchResponsesRequest())
      let base64 = require('base-64');
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
       axios.get(process.env.REACT_APP_API_HOST+'/comments/responses/'+id, {
        headers: {'Authorization' : 'Basic '+ base64.encode(user+ ":"+ pass)},
      })
        .then( res =>{
          let result = [];

          Object.values(res.data).forEach(item => {
              result = result.concat(item);
          });
          console.log(result);
          dispatch(fetchResponsesSucess(result))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchResponsesFailure(error))
        })
    }
  }
}
