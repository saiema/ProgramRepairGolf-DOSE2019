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

export const fetchComments = () => {
  return function(dispatch, getState) {
    if (getState().comments.data.length === 0) {
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
      const id=348;
       axios.get('http://192.168.0.176:55555/comments/users/'+id, {
         headers: h,
      })
        .then( res =>{
          console.log(res.data);
          dispatch(fetchCommentsSucess(res.data))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchCommentsFailure(error))
        })
    }
  }
}
