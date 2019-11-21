import axios from 'axios';
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from '../../constants/ActionTypes'


const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  }
}

const fetchCommentsSucess = comments => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

const fetchCommentsFailure = error => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

export const fetchCommentsUsers = () => {
  return function(dispatch, getState) {
    if (getState().comments.data.length === 0) {
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
      const id=3;
       axios.get('http://192.168.0.186:55555/comments/users/'+id, {
         headers: h,
      })
        .then( res =>{
          let result = [];

          Object.values(res.data).forEach(item => {
              result = result.concat(item);
          });
          console.log(result);
          dispatch(fetchCommentsSucess(result))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchCommentsFailure(error))
        })
    }
  }
}
