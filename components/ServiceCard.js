import React from 'react'

export default function ServiceCard (props) {
    const { src, title, children } = props
    return (
    <article className="service">
        <img src={src} className="service__image"></img>
        <h2 className="service__title">{title}</h2>
        <p className="service__text">{children}</p>
        <style jsx>
            {`
            .service {
            text-align: center;
            margin: 1rem 0;
            padding: 1rem;
            max-width: 20rem;
            }
            .service__image {
            width: 100%;
            margin: 1rem 0;
            }
            .service__title {
            margin-bottom: 1rem;
            }
            `}
        </style>
    </article>
    )
} 