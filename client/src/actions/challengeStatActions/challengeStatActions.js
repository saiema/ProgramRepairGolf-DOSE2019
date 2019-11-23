import axios from 'axios';
import {
  FETCH_CHALLENGESTAT_REQUEST,
  FETCH_CHALLENGESTAT_SUCCESS,
  FETCH_CHALLENGESTAT_FAILURE
} from '../constants/CSActionTypes'


const fetchChallengeStatRequest = () => {
  return {
    type: FETCH_CHALLENGESTAT_REQUEST
  }
}

const fetchChallengeStatSucess = challengeStat => {
    return {
        type: FETCH_CHALLENGESTAT_SUCCESS,
        payload: challengeStat
    }
}

const fetchChallengeStatFailure = error => {
    return {
        type: FETCH_CHALLENGESTAT_FAILURE,
        payload: error
    }
}

export const fetchChallengeStat = (challengeId) => {
  return function(dispatch) {
    if (getState().challengeStat.data.length === 0) {
      dispatch(fetchChallengeStatRequest())

      axios.get('https://localhost:55555/challengestat/get/' + challengeId)
        .then( res =>{
          dispatch(fetchChallengeStatSucess(res.data.results))
        })
        .catch( error => {
          dispatch(fetchChallengeStatFailure(error.message))
        })
    }
  }
}