import axios from 'axios';
import base64 from 'base-64';
import {
  FETCH_PROPOSITIONS_REQUEST,
  FETCH_PROPOSITIONS_SUCCESS,
  FETCH_PROPOSITIONS_FAILURE
} from "../../constants/ActionTypes";

const fetchPropositionsRequest = () => {
  return {
    type: FETCH_PROPOSITIONS_REQUEST
  };
};

const fetchPropositionsSucess = propositions => {
  return {
    type: FETCH_PROPOSITIONS_SUCCESS,
    payload: propositions.data
  };
};

const fetchPropositionsFailure = error => {
  return {
    type: FETCH_PROPOSITIONS_FAILURE,
    payload: error
  };
};

export const fetchPropositionsGame = (idUsr, idChallenge) => {
  return async function(dispatch, getState) {
    dispatch(fetchPropositionsRequest());
    let username = getState().user.currentUser.username;
    axios
      .post(
        process.env.REACT_APP_API_HOST + "/users/" +
          idUsr +
          "/challenge/" +
          idChallenge +
          "/propsitions",
        null,
        {
          headers: {
            Authorization:
              "Basic" +
              base64.encode(username + ":" + localStorage.getItem("password"))
          }
        }
      )
      .then(res => {
        dispatch(fetchPropositionsSucess(res));
      })
      .catch(error => {
        dispatch(fetchPropositionsFailure(error.message));
      });
  };
}

