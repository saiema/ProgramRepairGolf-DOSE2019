import axios from 'axios'
import {
  FETCH_PROPOSITIONS_REQUEST,
  FETCH_PROPOSITIONS_SUCCESS,
  FETCH_PROPOSITIONS_FAILURE,
} from '../../constants/ActionTypes'


const fetchPropositionsRequest = () => {
  return {
    type: FETCH_PROPOSITIONS_REQUEST
  }
}

const fetchPropositionsSucess = propositions => {
    console.log(propositions);
    return {
        type: FETCH_PROPOSITIONS_SUCCESS,
        payload: propositions.data
    }
}

const fetchPropositionsFailure = error => {
    return {
        type: FETCH_PROPOSITIONS_FAILURE,
        payload: error
    }
}

export const fetchPropositions = () => {
  return async function(dispatch, getState) {
    if (getState().propositions.data.length === 0) {
      dispatch(fetchPropositionsRequest())
      const head = new Headers();
       head.append('Content-Type','application/json;charset=utf-8');
      const idUsr=139;
      axios.get('http://192.168.128.176:55555/user/'+idUsr+'/proposition')
        .then( res =>{
          dispatch(fetchPropositionsSucess(res))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchPropositionsFailure(error.message))
        })
    }
  }
}