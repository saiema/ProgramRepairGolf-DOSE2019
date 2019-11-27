import axios from 'axios';
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  FETCH_ADD_COMMENT_FAILURE,
  ADD_RESPONSE,
  FETCH_ADD_RESPONSE_FAILURE,
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

const fetchAddResponseSucess = responses => {
  return {
      type: ADD_RESPONSE,
      payload: responses
  }
}

const fetchAddResponseFailure = error => {
  return {
      type: FETCH_ADD_RESPONSE_FAILURE,
      payload: error
  }
}

//
export const fetchCommentsUsers = (id) => {
  return function(dispatch, getState) {
    if (getState().comments.data.length === 0) {
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
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
//
export const fetchAddComment = (state) => {
  return function(dispatch, getState) {
      console.log(state.challenge_id);
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
       //Current user
      const id=1;
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
//
export const fetchCommentsChallenge = (id) => {
  return function(dispatch, getState) {
    if (getState().comments.data.length === 0) {
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
       axios.get(process.env.REACT_APP_API_HOST+'/comments/challenges/'+id, {
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
//
export const fetchAddResponse = (state) => {
  return function(dispatch, getState) {
      dispatch(fetchCommentsRequest())
      const h = new Headers();
       h.append('Content-Type','application/json;charset=utf-8');
       h.set('Access-Control-Allow-Origin', "*");
       axios.post(process.env.REACT_APP_API_HOST+'/comments/createResponse', null,{params:{
         description: state.description,
         userId: state.user_id,
         challengeId: state.challenge_id,
         commentId: state.comment_id}},{
         headers: h,
      })
        .then( res =>{
          console.log(res.data);
          dispatch(fetchAddResponseSucess(res.data))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchAddResponseFailure(error))
        })
    }
}
