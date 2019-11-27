import axios from 'axios';
import {
    ADD_COMPILATION_CHALLENGE,
    MODIFY_COMPILATION_CHALLENGE,
    ADD_TEST_CHALLENGE,
    MODIFY_TEST_CHALLENGE,
    DELETE_CHALLENGE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../constants/ActionTypesChallenges'

export const cretateCompilationChallenge = (challenge) => {
  return {
    type: ADD_COMPILATION_CHALLENGE,
    challenge
  }
}

export const cretateTestChallenge = (challenge) => {
    return {
      type: ADD_TEST_CHALLENGE,
      challenge
    }
}

export const modifyCompilationChallenge = (challenge) => {
    return {
      type: MODIFY_COMPILATION_CHALLENGE,
      challenge
    }
}

export const modifyTestChallenge = (challenge) => {
    return {
      type: MODIFY_TEST_CHALLENGE,
      challenge
    }
}

export const deleteChallenge = (id) => {
  return {
    type: DELETE_CHALLENGE,
    id
  }
}


const fetchDataRequest = () => {
    return {
      type: FETCH_DATA_REQUEST
    }
}

const fetchDataSucess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const addCompilationChallenge = (user_id, title, class_name, description,
    source, point, owner_solution_id) =>{
    console.log("param addCompilationChallenge");
    console.log(user_id);
    console.log(title);
    console.log(class_name);
    console.log(description);
    console.log(source);
    console.log(point);
    console.log(owner_solution_id);
    console.log("....................");
    return function(dispatch) {
        dispatch(fetchDataRequest())
        fetch('http://localhost:55555/compilationChallenge/create', {
            method: 'POST',
            body: JSON.stringify({
                userId: user_id,
                title: title,
                className: class_name,
                description: description,
                source: source,
                point: point,
                ownerSolutionId: owner_solution_id
            })
        })
        .then( res => {
        console.log("res.data-ADD_COMPILATION");
        console.log(res.data);
            dispatch(fetchDataSucess(res.data))
        })
        .catch( error => {
            dispatch(fetchDataFailure(error.message))
        })
    }
}

export const addTestChallenge = (user_id, title, class_name, description,
    source, point, owner_solution_id, test) =>{
    console.log("param addTestChallenge");
    console.log(user_id);
    console.log(title);
    console.log(class_name);
    console.log(description);
    console.log(source);
    console.log(point);
    console.log(owner_solution_id);
    console.log(test);
    console.log("....................");
    return function(dispatch) {
        dispatch(fetchDataRequest())
        axios.post('http://localhost:55555/testChallenge/create', {
            userId: user_id,
            title: title,
            className: class_name,
            description: description,
            source: source,
            point: point,
            ownerSolutionId: owner_solution_id,
            test: test
        })
        .then( res => {
        console.log("res.data-ADD_TEST");
        console.log(res.data);
            dispatch(fetchDataSucess(res.data))
        })
        .catch( error => {
            dispatch(fetchDataFailure(error.message))
        })
    }
}

// export const modifyCompilationChallenge = (id, title, class_name, description,
//     source, point) =>{
//     return function(dispatch) {
//         dispatch(fetchDataRequest())
//         axios.put('http://localhost:55555/compilationChallenge/modify', {
//             id: id,
//             title: title,
//             className: class_name,
//             description: description,
//             source: source,
//             point: point
//         })
//         .then( res => {
//         console.log("res.data-MODIFY_COMPILATION");
//         console.log(res.data);
//             dispatch(fetchDataSucess(res.data))
//         })
//         .catch( error => {
//             dispatch(fetchDataFailure(error.message))
//         })
//     }
// }

// export const modifyTestChallenge = (id, title, class_name, description,
//     source, point, test) =>{
//     return function(dispatch) {
//         dispatch(fetchDataRequest())
//         axios.put('http://localhost:55555/testChallenge/modify', {
//             id: id,
//             title: title,
//             className: class_name,
//             description: description,
//             source: source,
//             point: point,
//             test: test
//         })
//         .then( res => {
//         console.log("res.data-MODIFY_TEST");
//         console.log(res.data);
//             dispatch(fetchDataSucess(res.data))
//         })
//         .catch( error => {
//             dispatch(fetchDataFailure(error.message))
//         })
//     }
// }
