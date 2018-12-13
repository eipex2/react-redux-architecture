import React from 'react'
import PropTypes from 'prop-types'

import "./page.css"
import { LoginPage } from '../../pages'

const Page = (props) => {

    const { authenticated } = props

    return (
        <div className={`page ${props.className}`}>
            {props.children}
        </div>
    )
}

Page.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
}

export default Page