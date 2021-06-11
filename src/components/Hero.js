import React from 'react'
import CallToAction from './CallToAction'
import '../assets/styles/Hero.css'

export default function Hero (props) {
    const {title, subtitle, buttonText, children} = props
    return (
            <section className="hero">
                <div className="hero__container">
                    <h2 className="hero__title">{title}</h2>
                    <h3 className="hero__subtitle">{subtitle}</h3>
                    <p className="hero__text">{children}</p>
                    <CallToAction
                        link="https://wa.me/message/LBT3GA3KFI23E1"
                        text={buttonText}
                        external={true}
                    />
                </div>
 
            </section>
        )
    }
