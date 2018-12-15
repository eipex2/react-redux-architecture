import React from 'react'

import { Page } from '../../components'

import './dashboard-view.css'

const DashboardView = (props) => {

    const { user = {} } = props

    return (
        <Page className="page-view">
            <div>
                <h1>Congratulations {user.email}</h1>
                <h3>you are logged in <span role="img" aria-label="smiling-emoji">😁</span></h3>
            </div>
        </Page>
    )
}

export default DashboardView