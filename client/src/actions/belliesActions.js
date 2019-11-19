import axios from 'axios';
import {
  FETCH_BELLIES_REQUEST,
  FETCH_BELLIES_SUCCESS,
  FETCH_BELLIES_FAILURE,
} from '../constants/ActionTypes'

const fetchBelliesRequest = () => {
  return {
    type: FETCH_BELLIES_REQUEST
  }
}

const fetchBelliesSucess = bellies => {
  return {
    type: FETCH_BELLIES_SUCCESS,
    payload: bellies
  }
}

const fetchBelliesFailure = error => {
  return {
    type: FETCH_BELLIES_FAILURE,
    payload: error
  }
}

export const fetchBellies = () => {
  return function(dispatch, getState) {
    dispatch(fetchBelliesRequest())

    axios.get('http://localhost:55555/belly/export')
      .then( res =>{
        dispatch(fetchBelliesSucess(res.data.results))
      })
      .catch(error => {
        dispatch(fetchBelliesFailure(error.message))
      })
  }
}
