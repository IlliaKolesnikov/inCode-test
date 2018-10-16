import {FETCH_PROFILE_DATA_BEGIN, 
        FETCH_PROFILE_DATA_SUCCESS,
        FETCH_PROFILE_DATA_FAILURE,
        FIND_USER } from '../constants/'
const initialState = {
    isFetching: true,
    data: [],
    filteredData: [],
    error: null
};



function profile(state = initialState, action){
    switch(action.type){
        case FETCH_PROFILE_DATA_BEGIN: 
            return {...state}
        case FETCH_PROFILE_DATA_SUCCESS:
            return {...state, isFetching: false, data: action.payload, filteredData: action.payload}
        case FETCH_PROFILE_DATA_FAILURE:
            return {...state, isFetching: false, error: action.payload}
        case FIND_USER:
            const isMatch = result => { 
            const re = new RegExp(action.payload, 'i');
       
        return re.test(result.general.firstName) || re.test(result.general.lastName)
                || re.test(result.job.title) || re.test(result.job.company) 
                || re.test(result.contact.phone) || re.test(result.contact.email)
                || re.test(result.address.country) || re.test(result.address.city)
                || re.test(result.address.street) || re.test(result.address.zipCode)
    } 
    const filtered = state.data.filter(isMatch);
            return{...state, filteredData: filtered}
        default: 
        return state
    }
}

export default profile