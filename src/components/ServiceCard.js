import React from 'react'
import '../assets/styles/ServiceCard.css'

export default function ServiceCard (props) {
    const { src, title, children } = props
    return (
    <article className="service">
        <img src={src} className="service__image"></img>
        <h2 className="service__title">{title}</h2>
        <p className="service__text">{children}</p>
    </article>
    )
} 