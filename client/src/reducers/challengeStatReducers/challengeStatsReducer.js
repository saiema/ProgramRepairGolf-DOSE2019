import {
    FETCH_CHALLENGESTATS_REQUEST,
    FETCH_CHALLENGESTATS_SUCCESS,
    FETCH_CHALLENGESTATS_FAILURE,
} from '../../constants/challengeStatConstants/ActionTypes'

const initChallengeStatsState = {
    data: [],
    count: 0,
    loading: false,
    error: ''
}

const challengeStatsReducer = (state = initChallengeStatsState, action) => {
    switch(action.type) {
        case FETCH_CHALLENGESTATS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CHALLENGESTATS_SUCCESS:
            console.log("reducer");

            const challengeStats = action.payload.map(challengeStat => ({
                name: challengeStat,
                id: 1
            }))
            console.log(challengeStats);
            return {
                loading: false,
                data: challengeStats,
                count: challengeStats.length,
                error: ''
            }

        case FETCH_CHALLENGESTATS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                count: 0,
                error: action.payload,
            }

        default:
            return state
    }
}

export default challengeStatsReducer;
