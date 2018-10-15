import axios from 'axios'
export function getData(){
    return dispatch =>{
        dispatch({
            type: "FETCH_PROFILE_DATA_BEGIN"
        })
        axios.get('./clients.json')
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

export function searchUser(data){
    return dispatch =>{
        dispatch({
            type: "FIND_USER",
            payload: data
        })
    }
}