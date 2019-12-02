import { combineReducers } from 'redux'
import challengeStatsReducer from './challengeStatsReducer'
import challengeStatReducer from './challengeStatsReducer'


const rootReducer = combineReducers({
    challengeStats: challengeStatsReducer,
    challengeStat: challengeStatReducer,
})

export default rootReducer
