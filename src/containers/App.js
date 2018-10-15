import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App'
import {getData, searchUser} from '../actions/userActions'

function mapStateToProps(state){
    return {
        profile: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        getData: () => dispatch(getData()),
        searchUser: (inf) => dispatch(searchUser(inf))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)