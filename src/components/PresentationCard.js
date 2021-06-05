import React from 'react'
import CallToAction from './CallToAction'

import '../assets/styles/PresentationCard.css'

export default function PresentationCard (props) {
    const { name, src, studies, invitation, link } = props
        return (
            <section className="presentation">
                <h2 className="presentation-title">
                    {name}
                </h2>
                <figure className="presentation__image-container">
                    <img className="presentation__image" src={src} alt={name}/>
                    <figcaption className="presentation__caption">{studies}</figcaption>
                </figure>
                <p className="presentation__invitation">{invitation}</p>
                <CallToAction 
                    link={link}
                    text="Presentación"
                />
            </section>

        )
}
