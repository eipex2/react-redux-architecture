import { connect } from 'react-redux'

import LoginView from './login-view'

import { mapDispatchToProps } from './login-controller'

export default connect(null, mapDispatchToProps)(LoginView)