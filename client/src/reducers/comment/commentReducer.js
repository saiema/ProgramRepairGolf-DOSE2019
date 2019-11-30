import {
    FETCH_RESPONSES_REQUEST,
    FETCH_RESPONSES_SUCCESS,
    FETCH_RESPONSES_FAILURE,
    ADD_RESPONSE,
    FETCH_ADD_RESPONSE_FAILURE,
} from '../../constants/ActionTypes'

const initCommentState = {
      data: {},
      count:0,
      loading: false,
      error:''
}

const commentReducer = (state = initCommentState, action) => {
    switch(action.type) {
        case FETCH_RESPONSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_RESPONSES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: responses(state.data, action.payload),
                count: action.payload.length,
                error: ''
            }

        case FETCH_RESPONSES_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            }
            case ADD_RESPONSE:
              return{
                    ...state,
                    loading:false,
                    data: add_response(state.data, action.payload),
                    count:state.count + 1
            }
            case FETCH_ADD_RESPONSE_FAILURE:
              return{
                ...state,
                loading: false,
                error: action.payload,
                count:0
            }

        default:
            return state
    }
}

 function add_response(responses, response) {
   const existingResponses = responses[response.comment_id];
   console.log("a ver");
   console.log(existingResponses);
   console.log(existingResponses==='undefined');
   if(typeof existingResponses !== 'undefined') {
     console.log("Hay che");
     existingResponses.push(response)
   } else {
     console.log("no che");
     const comment_id= response.comment_id;
     responses[comment_id]= response
   }
   return responses;
 }
function responses(responses, newResponse) {
    const comment_id= newResponse[0].comment_id;
  responses[comment_id]= newResponse;
  return responses;
}

export default commentReducer;
