import { connect } from 'react-redux'
import React from 'react'
import { Route } from 'react-router-dom'

import  CustomForm from '../composites/Form'

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

const FormConnect = () => {
    return connect(mapStateToProps, mapDispatchToProps)(CustomForm)
}

const FormRoute = (props) => {
    return <Route path={props.match.url + "/signup"} component={FormConnect} />
}

export default FormRoute;