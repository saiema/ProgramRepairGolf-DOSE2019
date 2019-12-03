import {
    FETCH_CHALLENGESTAT_REQUEST,
    FETCH_CHALLENGESTAT_SUCCESS,
    FETCH_CHALLENGESTAT_FAILURE,
} from '../../constants/challengeStatConstants/ActionTypes'

const initChallengeStatState = {
    data: [],
    loading: false,
    error: ''
}

const challengeStatReducer = (state = initChallengeStatState, action) => {
    switch(action.type) {
        case FETCH_CHALLENGESTAT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CHALLENGESTAT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_CHALLENGESTAT_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            }

        default:
            return state
    }
}

export default challengeStatReducer;
