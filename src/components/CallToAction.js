import React from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/CallToAction.css'

export default function Service (props) {
    const { link, text, external} = props
    if(external){
        return (
            <React.Fragment>
                <a href={link} className="button-link" target="_blank" rel='noreferrer noopener'>{text}</a>
            </React.Fragment>
        )
    }
        return (
            <React.Fragment>
                <Link to={link} className="button-link">{text}</Link>
            </React.Fragment>

        )
}
