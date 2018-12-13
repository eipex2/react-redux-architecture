//1. import connect from react-redux
import { connect } from 'react-redux'

//2.import mapStateToProps from our controller
import { mapStateToProps } from './dashboard-controller'

//3. import the view
import DashboardView from './dashboard-view'

//4. connect your view to your redux state
export default connect(mapStateToProps)(DashboardView)