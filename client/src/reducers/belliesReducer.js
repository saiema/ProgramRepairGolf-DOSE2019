import {
    FETCH_BELLIES_REQUEST,
    FETCH_BELLIES_SUCCESS,
    FETCH_BELLIES_FAILURE,
} from '../constants/ActionTypes'

const initBelliesState = {
    data: {},
    loading: false,
    error: ''
}

const belliesReducer = (state = initBelliesState, action) => {
    switch(action.type) {
        case FETCH_BELLIES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_BELLIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_BELLIES_FAILURE:
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

export default belliesReducer;
