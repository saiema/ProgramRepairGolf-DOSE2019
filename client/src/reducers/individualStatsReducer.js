import {
  FETCH_INDIVIDUAL_STATS_REQUEST,
  FETCH_INDIVIDUAL_STATS_SUCCESS,
  FETCH_INDIVIDUAL_STATS_FAILURE,
} from '../constants/UserStatConstants'

const initIndividualStatsState = {
    data: {},
    loading: false,
    error: ''
}

const individualStatsReducer = (state = initIndividualStatsState, action) => {
    switch(action.type) {
        case   FETCH_INDIVIDUAL_STATS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_INDIVIDUAL_STATS_SUCCESS:
            const individual_stats = {
                ...action.payload
            }
            return {
                ...state,
                loading: false,
                data: individual_stats,
                error: ''
            }

        case FETCH_INDIVIDUAL_STATS_FAILURE:
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

export default individualStatsReducer;
