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

    loginBtnState = () => {
        if (this.state.error) {
            return {
                title: "Login FAILED, Try Again!"
            }
        }
        return {
            title: "LOGIN"
        }
    }

    onChange = e => {

        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    setHeading = () => {
        if (this.state.error) {
            return <span className="emoji" role="img" aria-label="cool-emoji">😭</span>
        }
        return <span className="emoji" role="img" aria-label="cool-emoji">😎</span>
    }

    render() {

        const { email, password } = this.state
        const { title: loginBtnTitle } = this.loginBtnState()

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
                <button type="submit" onClick={this.submit}>{loginBtnTitle}</button>
            </form>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func
}

export default LoginForm