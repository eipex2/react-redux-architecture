import React from 'react'
import PropTypes from 'prop-types'

import "./login_form.css"

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    submit = e => {
        e.preventDefault()
        const { email, password } = this.state

        this.props.login(email, password)
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {

        const { email, password } = this.state

        return (
            <form>
                <h1>Hello 😎</h1>
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