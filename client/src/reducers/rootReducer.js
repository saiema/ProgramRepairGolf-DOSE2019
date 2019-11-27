import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
<<<<<<< HEAD
import commentsReducer from './comment/commentsReducer'
import commentReducer from './comment/commentReducer'
=======
import rankingReducer from './rankingReducer'
import individualStatsReducer from './individualStatsReducer'
import allCompilationChallengeReducer from './challenge/allCompilationChallengeReducer'
import resolvedCompilationChallengeReducer from './challenge/resolvedCompilationChallengeReducer'
import unsolvedCompilationChallengeReducer from './challenge/unsolvedCompilationChallengeReducer'
import allTestChallengeReducer from './challenge/allTestChallengeReducer'
import resolvedTestChallengeReducer from './challenge/resolvedTestChallengeReducer'
import unsolvedTestChallengeReducer from './challenge/unsolvedTestChallengeReducer'
import challengeReducer from './challenge/challengeReducer'
>>>>>>> 7c10b60efb228292dbabd1335cea88872a1a89d7
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
<<<<<<< HEAD
    comments: commentsReducer,
    comment: commentReducer,
=======
    ranking: rankingReducer,
    individual_stats: individualStatsReducer,
    allCompilationChallenge: allCompilationChallengeReducer,
    resolvedCompilationChallenge: resolvedCompilationChallengeReducer,
    unsolvedCompilationChallenge: unsolvedCompilationChallengeReducer,
    allTestChallenge: allTestChallengeReducer,
    resolvedTestChallenge: resolvedTestChallengeReducer,
    unsolvedTestChallenge: unsolvedTestChallengeReducer,
    challenge: challengeReducer,
>>>>>>> 7c10b60efb228292dbabd1335cea88872a1a89d7
    users: usersReducer,
    user: userReducer
})

export default rootReducer
