import React from 'react'
import { Page, LoginForm } from '../../components'

import './login-view.css'

class LoginView extends React.Component {
    render() {
        return (
            <Page className="login_view">
                <LoginForm login={this.props.login} />
            </Page>
        )
    }
}

export default LoginView