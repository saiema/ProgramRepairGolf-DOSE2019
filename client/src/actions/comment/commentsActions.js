import axios from 'axios';
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  FETCH_ADD_COMMENT_FAILURE,
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



//
export const fetchCommentsUsers = (id) => {
  return function(dispatch, getState) {
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
       axios.get(process.env.REACT_APP_API_HOST+'/comments/users/'+id, {
        headers: {'Authorization' : 'Basic '+ base64.encode(user+ ":"+ pass)},
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
//
export const fetchAddComment = (state) => {
  return function(dispatch, getState) {
      console.log(state.challenge_id);
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
       axios.post(process.env.REACT_APP_API_HOST+'/comments/createComment',{
         title: state.title,
         description: state.description,
         userId: state.user_id,
         challengeId: state.challenge_id},{
        headers: {'Authorization' : 'Basic '+ base64.encode(user+ ":"+ pass)},
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
   
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
       axios.get(process.env.REACT_APP_API_HOST+'/comments/challenges/'+id, {
         headers: {'Authorization' : 'Basic '+ base64.encode(user+ ":"+ pass)},
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

