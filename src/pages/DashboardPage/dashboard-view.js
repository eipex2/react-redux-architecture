import React from 'react'

import { Page } from '../../components'

import './dashboard-view.css'

const DashboardView = (props) => {
    return (
        <Page className="page-view">
            <div>
                <h1>Congratulations {props.name}</h1>
                <h3>you are logged in <span role="img" aria-label="smiling-emoji">😁</span></h3>
            </div>
        </Page>
    )
}

export default DashboardView