import { combineReducers } from 'redux'
import hackersReducer from './hackersReducer'
import hackerReducer from './hackerReducer'
import rankingReducer from './rankingReducer'
import individualStatsReducer from './individualStatsReducer'
import allCompilationChallengeReducer from './challenge/allCompilationChallengeReducer'
import resolvedCompilationChallengeReducer from './challenge/resolvedCompilationChallengeReducer'
import unsolvedCompilationChallengeReducer from './challenge/unsolvedCompilationChallengeReducer'
import allTestChallengeReducer from './challenge/allTestChallengeReducer'
import resolvedTestChallengeReducer from './challenge/resolvedTestChallengeReducer'
import unsolvedTestChallengeReducer from './challenge/unsolvedTestChallengeReducer'
import challengeReducer from './challenge/challengeReducer'
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
//      data: [{comment}]
//      count: 0,
//      loading: false,
//      error: ''
//     },
//    responses: {
//      data: [ (id, [{comment}]) ],
//      count:0,
//      loading: false,
//      error:''
//     },
// }

const rootReducer = combineReducers({

    hackers: hackersReducer,
    hacker: hackerReducer,
    ranking: rankingReducer,
    individual_stats: individualStatsReducer,
    allCompilationChallenge: allCompilationChallengeReducer,
    resolvedCompilationChallenge: resolvedCompilationChallengeReducer,
    unsolvedCompilationChallenge: unsolvedCompilationChallengeReducer,
    allTestChallenge: allTestChallengeReducer,
    resolvedTestChallenge: resolvedTestChallengeReducer,
    unsolvedTestChallenge: unsolvedTestChallengeReducer,
    challenge: challengeReducer,
    comments: commentsReducer,
    responses: commentReducer,
    users: usersReducer,
    user: userReducer
})

export default rootReducer
