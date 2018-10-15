import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App'
import {getData} from '../actions/userActions'

function mapStateToProps(state){
    return {
        profile: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)