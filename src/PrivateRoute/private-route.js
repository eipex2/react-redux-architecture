import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

/**
 * `PrivateRoute` - any route that requires the user to be authenticated
 * @param props 
 */
const PrivateRoute = props => {

    //1. destructure props
    const { path, user, component: Component } = props

    //2. conditionally render `Component` or `Redirect`
    return (
        <Route exact path={path} render={() => (
            user ?
                <Component />
                :
                <Redirect to="/login" />
        )} />
    )
}

//3. map session state to props
const mapStateToProps = ({ sessionState }) => ({
    ...sessionState
})

//4. export connected `PrivateRoute` component
export default connect(mapStateToProps)(PrivateRoute)