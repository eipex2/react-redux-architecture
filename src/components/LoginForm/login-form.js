import React from 'react'
import PropTypes from 'prop-types'

import "./login-form.css"

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    submit = e => {

        e.preventDefault()

        const { email, password } = this.state

        this.props.login(email, password).catch(() => {
            this.setState({
                error: true
            })
        })
    }

    onChange = e => {

        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    setHeading = () => {
        if (this.state.error) {
            return <h1>Login failed <span role="img" aria-label="cool-emoji">😭</span></h1>
        }
        return <h1>Hello <span role="img" aria-label="cool-emoji">😎</span></h1>
    }

    render() {

        const { email, password, error } = this.state

        return (
            <form>
                {this.setHeading()}
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={this.onChange} />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={this.onChange} />
                <button type="submit" onClick={this.submit}>LOGIN</button>
            </form>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func
}

export default LoginForm