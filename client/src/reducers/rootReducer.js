import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
import rankingReducer from './rankingReducer'
import individualStatsReducer from './individualStatsReducer'

// STATE
//
// {
//    hackers: {
//      data: [],
//      count: 0,
//      loading: false,
//      error: ''
//     },
//    hacker: {
//      data: {},
//      loading: false,
//      error: ''
//    }
// }

const rootReducer = combineReducers({
    hackers: hackersReducer,
    hacker: hackerReducer,
    ranking: rankingReducer,
    individual_stats: individualStatsReducer,
})

export default rootReducer
