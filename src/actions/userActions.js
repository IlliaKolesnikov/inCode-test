import axios from 'axios'
export function getData(){
    return dispatch =>{
        dispatch({
            type: "FETCH_PROFILE_DATA_BEGIN"
        })
        axios.get('./clients.json')
        .then(handleErrors)
        .then(res=> res.data)
        .then(json=> {
            dispatch({
                type: "FETCH_PROFILE_DATA_SUCCESS",
                payload: json})
        })
        .catch(error => dispatch({
            type: "FETCH_PROFILE_DATA_FAILURE",
            payload: error
        }));
    }
  
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}