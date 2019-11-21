import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from '../../constants/ActionTypes'

const initCommentsState = {
    data: [],
    count: 0,
    loading: false,
    error: ''
}

const commentsReducer = (state = initCommentsState, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                count: action.payload.length,
                error: ''
            }

        case FETCH_COMMENTS_FAILURE:
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

export default commentsReducer;
