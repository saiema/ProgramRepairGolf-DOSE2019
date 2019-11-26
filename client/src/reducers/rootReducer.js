import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
<<<<<<< HEAD
import allCompilationChallengeReducer from './challenge/allCompilationChallengeReducer'
import resolvedCompilationChallengeReducer from './challenge/resolvedCompilationChallengeReducer'
import unsolvedCompilationChallengeReducer from './challenge/unsolvedCompilationChallengeReducer'
import allTestChallengeReducer from './challenge/allTestChallengeReducer'
import resolvedTestChallengeReducer from './challenge/resolvedTestChallengeReducer'
import unsolvedTestChallengeReducer from './challenge/unsolvedTestChallengeReducer'
=======
import userReducer from './reducersUser/userReducer'
import usersReducer from './reducersUser/usersReducer'
>>>>>>> 2cdb954f1f78a6a263b607d2f2b5a6bd7fd7062f

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
    allCompilationChallenge: allCompilationChallengeReducer,
    resolvedCompilationChallenge: resolvedCompilationChallengeReducer,
    unsolvedCompilationChallenge: unsolvedCompilationChallengeReducer,
    allTestChallenge: allTestChallengeReducer,
    resolvedTestChallenge: resolvedTestChallengeReducer,
    unsolvedTestChallenge: unsolvedTestChallengeReducer

    users: usersReducer,
    user: userReducer,
})

export default rootReducer
