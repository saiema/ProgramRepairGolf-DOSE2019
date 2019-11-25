import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
import commentsReducer from './comment/commentsReducer'
import commentReducer from './comment/commentReducer'
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
//    },
//   comments: {
//      data: [],
//      count: 0,
//      loading: false,
//      error: ''
//     },
//    comment: {
//      data: {},
//      loading: false,
//      responses:[],
//      error:''
//     },
// }

const rootReducer = combineReducers({
    hackers: hackersReducer,
    hacker: hackerReducer,
    comments: commentsReducer,
    comment: commentReducer,
    users: usersReducer,
    user: userReducer,
})

export default rootReducer
