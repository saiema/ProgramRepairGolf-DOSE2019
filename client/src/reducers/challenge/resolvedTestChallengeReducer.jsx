import {
    FETCH_RESOLVED_TEST_CHALLENGE_REQUEST,
    FETCH_RESOLVED_TEST_CHALLENGE_SUCCESS,
    FETCH_RESOLVED_TEST_CHALLENGE_FAILURE
} from '../../constants/ActionTypesChallenges'

const initTestChallengeState = {
    data: [],
    loading: false,
    error: ''
}


const resolvedTestChallengeReducer = (state = initTestChallengeState, action) => {
    
    switch(action.type) {
        
        case FETCH_RESOLVED_TEST_CHALLENGE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_RESOLVED_TEST_CHALLENGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }


        case FETCH_RESOLVED_TEST_CHALLENGE_FAILURE:
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

export default resolvedTestChallengeReducer;
