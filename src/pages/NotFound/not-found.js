import React from 'react'

import { Page } from '../../components'

import "./not-found.css"

/**
 * a `NotFound` page to handle all unvailable routes
 * @param props 
 */
const NotFound = (props) => (
    <Page className="not_found">
        <h1>404</h1>
        <h3>PAGE NOT FOUND</h3>
    </Page>
)


export default NotFound