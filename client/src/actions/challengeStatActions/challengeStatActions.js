import axios from 'axios';
import {
  FETCH_CHALLENGESTAT_REQUEST,
  FETCH_CHALLENGESTAT_SUCCESS,
  FETCH_CHALLENGESTAT_FAILURE,
  FETCH_CHALLENGESTATS_REQUEST,
  FETCH_CHALLENGESTATS_SUCCESS,
  FETCH_CHALLENGESTATS_FAILURE
} from '../../constants/challengeStatConstants/ActionTypes'

const fetchChallengeStatsRequest = () => {
  return {
    type: FETCH_CHALLENGESTATS_REQUEST
  }
}

const fetchChallengeStatsSucess = users => {
    return {
        type: FETCH_CHALLENGESTATS_SUCCESS,
        payload: challengeStats
    }
}

const fetchChallengeStatsFailure = error => {
    return {
        type: FETCH_CHALLENGESTATS_FAILURE,
        payload: error
    }
}

export const fetchChallengeStats = () => {
  return function(dispatch, getState) {
    if (getState().challengeStats.data.length === 0) {
      dispatch(fetchChallengeStatsRequest())

      axios.get('http://localhost:55555/challengestat/all')
        .then( res =>{
          console.log(res.data);
          dispatch(fetchChallengeStatsSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchChallengeStatsFailure(error.message))
        })
    }
  }
}


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
