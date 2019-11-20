import axios from 'axios';
import {
  FETCH_RANKING_REQUEST,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
} from '../constants/ActionTypes'


const fetchRankingRequest = () => {
  return {
    type: FETCH_RANKING_REQUEST
  }
}

const fetchRankingSucess = ranking => {
    return {
        type: FETCH_RANKING_SUCCESS,
        payload: ranking
    }
}

const fetchRankingFailure = error => {
    return {
        type: FETCH_RANKING_FAILURE,
        payload: error
    }
}

export const fetchRanking = () => {
  return function(dispatch, getState) {
    if (getState().ranking.data.length === 0) {
      dispatch(fetchHackersRequest())

      axios.get('http://localhost:55555/userstats/ranking?number=20')
        .then( res =>{
          dispatch(fetchHackersSucess(res.data.results))
        })
        .catch(error => {
          dispatch(fetchHackersFailure(error.message))
        })
    }
  }
}
