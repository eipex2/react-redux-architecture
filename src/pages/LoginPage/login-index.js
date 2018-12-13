//1. import connect from react-redux
import { connect } from 'react-redux'

//import mapDispatchToProps from our controller
import { mapDispatchToProps } from './login-controller'

import LoginView from './login-view'

export default connect(null, mapDispatchToProps)(LoginView)