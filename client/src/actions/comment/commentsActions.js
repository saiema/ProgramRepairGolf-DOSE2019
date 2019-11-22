import axios from 'axios';
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  FETCH_ADD_COMMENT_FAILURE
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
const fetchAddCommentsSucess = comments => {
  return {
      type: ADD_COMMENT,
      payload: comments
  }
}

const fetchCommentsFailure = error => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

const fetchAddCommentFailure = error => {
  return {
      type: FETCH_ADD_COMMENT_FAILURE,
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
      const id=348;
       axios.get(process.env.REACT_APP_API_HOST+'/comments/users/'+id, {
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
export const fetchAddComment = (state) => {
  return function(dispatch, getState) {
      console.log(state.challenge_id);
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
      const id=3;
       axios.post(process.env.REACT_APP_API_HOST+'/comments/createComment', null,{params:{
         title: state.title,
         description: state.description,
         userId: state.user_id,
         challengeId: state.challenge_id}},{
         headers: h,
      })
        .then( res =>{
        
          console.log(res.data);
          dispatch(fetchAddCommentsSucess(res.data))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchAddCommentFailure(error))
        })
    }
}
