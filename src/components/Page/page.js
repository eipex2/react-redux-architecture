import React from 'react'
import PropTypes from 'prop-types'

import "./page.css"

const Page = (props) => {
    return (
        <div className={`page ${props.className}`}>{props.children}</div>
    )
}

Page.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
}

export default Page