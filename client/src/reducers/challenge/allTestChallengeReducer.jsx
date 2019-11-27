import {
    FETCH_ALL_TEST_CHALLENGE_REQUEST,
    FETCH_ALL_TEST_CHALLENGE_SUCCESS,
    FETCH_ALL_TEST_CHALLENGE_FAILURE
} from '../../constants/ActionTypesChallenges'

const initTestChallengeState = {
    data: [],
    loading: false,
    error: ''
}


const allTestChallengeReducer = (state = initTestChallengeState, action) => {
    
    switch(action.type) {
        
        case FETCH_ALL_TEST_CHALLENGE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALL_TEST_CHALLENGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }


        case FETCH_ALL_TEST_CHALLENGE_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }

        default:
            return state
    }
}

export default allTestChallengeReducer;
