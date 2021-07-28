import React from 'react'
import CallToAction from './CallToAction'
import AutorImage from './AutorImage'

export default function PresentationCard (props) {
    const { name, src, studies, invitation, link } = props
        return (
            <section className="presentation">
                <h2 className="presentation-title">
                    {name}
                </h2>
                <figure className="presentation__image-container">
                    <AutorImage src={src} alt={name} />
                    <figcaption className="presentation__caption">{studies}</figcaption>
                </figure>
                <p className="presentation__invitation">{invitation}</p>
                <CallToAction 
                    link={link}
                    text="Presentación"
                />
                <style jsx>
                    {`
                    .presentation {
                    padding: 2.5rem;
                    background: var(--secondary-color);
                    text-align: center;
                    color: var(--letter-on-dark);
                    }
                    .presentation__image-container {
                    width: 100%;
                    max-width: 18rem;
                    margin: 2rem auto;
                    }
                    .presentation__caption {
                    margin: 1rem 0;
                    }
                    .presentation__invitation {
                    margin: 1.5 0;
                    }
                    `}
                </style>
            </section>

        )
}
