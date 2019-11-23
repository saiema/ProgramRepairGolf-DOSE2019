import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
import allCompilationChallengeReducer from './challenge/allCompilationChallengeReducer'
import resolvedCompilationChallengeReducer from './challenge/resolvedCompilationChallengeReducer'
import unsolvedCompilationChallengeReducer from './challenge/unsolvedCompilationChallengeReducer'
import allTestChallengeReducer from './challenge/allTestChallengeReducer'

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
    allTestChallenge: allTestChallengeReducer

})

export default rootReducer
