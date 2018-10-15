const initialState = {
    isFetching: true,
    data: [],
    filteredData: [],
    error: null
};



function profile(state = initialState, action){
    switch(action.type){
        case "FETCH_PROFILE_DATA_BEGIN": 
            return {...state}
        case "FETCH_PROFILE_DATA_SUCCESS":
            return {...state, isFetching: false, data: action.payload, filteredData: action.payload}
        case "FETCH_PROFILE_DATA_FAILURE":
            return {...state, isFetching: false, error: action.payload}
        default: 
        return state
    }
}

export default profile