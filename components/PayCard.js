import React from 'react'
import CallToAction from './CallToAction'

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
            <style jsx>
                {`
                .pay-card {
                width: 100%;
                max-width: 16.5rem;
                margin: 1rem 0;
                padding: 1rem;
                border: solid 1px;
                border-radius: 0.8rem;
                }
                .pay-card__button a {
                margin-left: 0;
                }
                `}
            </style>
        </div>
    )
}