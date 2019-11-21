import axios from 'axios'
import {
    FETCH_ALL_COMPILATION_CHALLENGE_REQUEST,
    FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_ALL_COMPILATION_CHALLENGE_FAILURE,
} from '../constants/ActionTypesChallenges'

const fetchAllCompilationChallengeRequest = () => {
    return {
      type: FETCH_ALL_COMPILATION_CHALLENGE_REQUEST
    }
}
  
const fetchAllCompilationChallengeSucess = allCompilationChallenge => {
    return {
        type: FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS,
        payload: allCompilationChallenge
    }
}

const fetchAllCompilationChallengeFailure = error => {
    return {
        type: FETCH_ALL_COMPILATION_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchAllCompilationChallenge = () => {
    //return function(dispatch, getState) {
    return function(dispatch) {
        dispatch(fetchAllCompilationChallengeRequest())

        axios.get('http://localhost:55555/compilationChallenge/all')
            .then( res =>{
                dispatch(fetchAllCompilationChallengeSucess(res.data))
            })
            .catch(error => {
                dispatch(fetchAllCompilationChallengeFailure(error.message))
        })
    }
}