import {
    FETCH_RESPONSES_REQUEST,
    FETCH_RESPONSES_SUCCESS,
    FETCH_RESPONSES_FAILURE,
    ADD_RESPONSE,
    FETCH_ADD_RESPONSE_FAILURE,
} from '../../constants/ActionTypes'

const initCommentState = {
      data: {},
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
        		console.log("con ustedes, lo que tenia: ");
        		console.log(state.data);
        		console.log("y lo nuevo: ");
        		console.log(action.payload);
            return {
                ...state,
                loading: false,
                data: responses(state.data, action.payload),
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
            }
            case FETCH_ADD_RESPONSE_FAILURE:
              return{
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}

 function add_response(responses, response) {
   const existingResponses = responses[response.comment_id];
   if(typeof existingResponses === 'undefined') {
     existingResponses.push(response)
   } else {
     const comment_id= response.comment_id;
     responses[comment_id]= response
   }
   return responses;
 }
function responses(responses, newResponse) {
  console.log("en reponses jiji");
    const comment_id= newResponse[0].comment_id;
    console.log("el comment_id");
    console.log(comment_id);
  responses[comment_id]= newResponse;
  console.log("y retorno");
  console.log(responses);
  return responses;
}

export default commentReducer;
