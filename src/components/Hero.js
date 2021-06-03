import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Hero.css'

export default function Hero (props) {
    const {title, subtitle, buttonText, children} = props
    return (
            <section className="hero">
                <div className="hero__container">
                    <h2 className="hero__title">{title}</h2>
                    <h3 className="hero__subtitle">{subtitle}</h3>
                    <p className="hero__text">{children}</p>
                    <a href="https://wa.me/message/LBT3GA3KFI23E1" target="_blank" className="hero__button">{buttonText}</a>
                </div>
 
            </section>
        )
    }
