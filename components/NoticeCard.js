import React from 'react'
import CallToAction from './CallToAction'

// import '../assets/styles/NoticeCard.css'

export default function Notice (props) {
    const { title, src, alt, children, link } = props
        return (
            <section className="notice">
                <div>
                <h2>{title}</h2>
                <img className="notice__image" src={src} alt={alt} layout='fill'/>
                </div>
                <div>
                <p className="notice__information">{children}</p>
                <CallToAction 
                    link={link}
                    text="Guía"
                />
                </div>
                <style jsx>
                    {`
                    .notice {
                    max-width: 50rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    margin: 3rem auto;
                    padding: 1rem;
                    text-align: center;
                    }
                    .notice__image,
                    .notice__information {
                    width: 20rem;
                    margin: 1rem 0;
                    }
                    `}
                </style>
            </section>
        )
}