import React from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/CallToAction.css'

export default function Service (props) {
    const { link, text } = props
        return (
            <React.Fragment>
                <Link to={link} className="button-link">{text}</Link>
            </React.Fragment>

        )
}
