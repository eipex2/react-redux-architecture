import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = (props) => {

    const { children, user } = props

    return (
        <Route exact path={props.path} render={() => (
            user ? (
                children
            ) : (
                    <Redirect to="/login" />
                )
        )} />
    )
}

const mapStateToProps = ({ sessionState }) => ({
    ...sessionState
})

export default connect(mapStateToProps)(PrivateRoute)