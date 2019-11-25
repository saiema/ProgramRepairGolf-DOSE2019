import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
<<<<<<< HEAD
import commentReducer from './comment/commentReducer'
=======
import userReducer from './reducersUser/userReducer'
import usersReducer from './reducersUser/usersReducer'
>>>>>>> 1e7dc584cb9783871ea972017b90e6ba7679e109

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
// }

const rootReducer = combineReducers({
    hackers: hackersReducer,
    hacker: hackerReducer,
<<<<<<< HEAD
    comments: commentReducer,
=======
    users: usersReducer,
    user: userReducer,
>>>>>>> 1e7dc584cb9783871ea972017b90e6ba7679e109
})

export default rootReducer
