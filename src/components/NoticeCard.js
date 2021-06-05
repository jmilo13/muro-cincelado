import React, { Children } from 'react'
import CallToAction from './CallToAction'

import '../assets/styles/NoticeCard.css'

export default function Notice (props) {
    const { title, src, alt, children, link } = props
        return (
            <section className="notice">
                <div>
                <h2>{title}</h2>
                <img className="notice__image" src={src} alt={alt}/>
                </div>
                <div>
                <p className="notice__information">{children}</p>
                <CallToAction 
                    link={link}
                    text="Guía"
                />
                </div>
            </section>
        )
}