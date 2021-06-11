import React from 'react'
import CallToAction from './CallToAction'

import '../assets/styles/PayCard.css'

export default function PayCard (props) {
    const {country, price, options, link, buttonText} = props
    return (
        <div className="pay-card">
            <h2 className="pay-card__country">{country}</h2>
            <h3 className="pay-card__price">{price}</h3>
            <div className='pay-card__button'>
                <CallToAction 
                    link={link}
                    text={buttonText}
                    external={true}
                />
            </div>
            <p className="pay-card__options">{options}</p>
        </div>
    )
}