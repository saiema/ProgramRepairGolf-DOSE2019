import axios from 'axios'
import {
    FETCH_ALL_TEST_CHALLENGE_REQUEST,
    FETCH_ALL_TEST_CHALLENGE_SUCCESS,
    FETCH_ALL_TEST_CHALLENGE_FAILURE
} from '../constants/ActionTypesChallenges'

const fetchAllTestChallengeRequest = () => {
    return {
      type: FETCH_ALL_TEST_CHALLENGE_REQUEST
    }
}
  
const fetchAllTestChallengeSucess = allTestChallenge => {
    return {
        type: FETCH_ALL_TEST_CHALLENGE_SUCCESS,
        payload: allTestChallenge
    }
}

const fetchAllTestChallengeFailure = error => {
    return {
        type: FETCH_ALL_TEST_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchAllTestChallenge = () => {
    return function(dispatch) {
        dispatch(fetchAllTestChallengeRequest())

        axios.get('http://localhost:55555/testChallenge/all')
            .then( res =>{
                dispatch(fetchAllTestChallengeSucess(res.data))
            })
            .catch(error => {
                dispatch(fetchAllTestChallengeFailure(error.message))
        })
    }
}