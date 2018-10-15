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
        case "FIND_USER":
            const isMatch = result => { 
            const re = new RegExp(action.payload, 'i');
       
        return re.test(result.general.firstName) || re.test(result.general.lastName)
                || re.test(result.job.title) || re.test(result.job.company) 
                || re.test(result.contact.phone) || re.test(result.contact.email)
    } 
    const filtered = state.data.filter(isMatch);
            return{...state, filteredData: filtered}
        default: 
        return state
    }
}

export default profile