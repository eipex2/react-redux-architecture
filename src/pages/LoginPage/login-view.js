import React from 'react'
import { LoginForm, Page } from '../../components'

import './login-view.css'

class LoginView extends React.Component {

    login = (email, password) => {

        const { loginUser, history } = this.props

        return loginUser(email, password).then(() => {
            history.push('/')
        })
    }

    render() {
        return (
            <Page className="login_view">
                <LoginForm login={this.login} />
            </Page>
        )
    }
}

export default LoginView