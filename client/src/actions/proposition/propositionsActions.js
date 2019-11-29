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


//idUsr, idChallenge
export const fetchPropositionsGame = (idUsr, idChallenge) => {
  return async function(dispatch, getState) {
    if (getState().propositions.data.length === 0) {
      dispatch(fetchPropositionsRequest())
      axios.post('http://localhost:55555/users/'+idUsr+'/challenge/'+idChallenge+'/propsitions', null, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("token")
        }
      })
        .then(res => {
          //console.log("----------------" + res)
          dispatch(fetchPropositionsSucess(res))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchPropositionsFailure(error.message))
        })
    }
  }
}


