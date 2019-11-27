import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
import rankingReducer from './rankingReducer'
import individualStatsReducer from './individualStatsReducer'
import userReducer from './reducersUser/userReducer'
import usersReducer from './reducersUser/usersReducer'

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
    users: usersReducer,
    user: userReducer,
})

export default rootReducer
