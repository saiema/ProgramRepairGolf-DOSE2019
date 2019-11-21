import {
  FETCH_RANKING_REQUEST,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
} from '../constants/UserStatConstants'

const initRankingState = {
    data: {},
    loading: false,
    error: ''
}

const rankingReducer = (state = initRankingState, action) => {
    switch(action.type) {
        case   FETCH_RANKING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_RANKING_SUCCESS:
            const ranking = {
                ...action.payload,
                id: action.payload.url.slice(0, -1).split('/').pop()
            }
            return {
                ...state,
                loading: false,
                data: ranking,
                error: ''
            }

        case FETCH_RANKING_FAILURE:
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

export default rankingReducer;
