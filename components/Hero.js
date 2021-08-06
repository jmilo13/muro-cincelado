import React from 'react'
import CallToAction from './CallToAction'

export default function Hero (props) {
    const {title, subtitle, buttonText, children} = props
    return (
            <section className="hero">
                <div className="hero__container">
                    <h2 className="hero__title">{title}</h2>
                    <h3 className="hero__subtitle">{subtitle}</h3>
                    <p className="hero__text">{children}</p>
                    <div className='hero__button'>
                        <CallToAction
                            link="https://wa.me/message/LBT3GA3KFI23E1"
                            text={buttonText}
                            external={true}
                        />
                    </div>
                </div>
                <style jsx>
                    {`
                    .hero {
                    display: flex;
                    position: relative;
                    min-height: 25rem;
                    padding: 2rem;
                    color: var(--letter-on-dark);
                    background: url('/images/hero-image.jpg') center/cover no-repeat;
                    }
                    .hero::before {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #00000080;
                    }
                    .hero__container {
                    position: relative;
                    padding: 1rem;
                    margin: auto;
                    width: 100%;
                    max-width: 50rem;
                    text-align: center;
                    }
                    .hero__title {
                    font-size: 2rem;
                    transition: all 1.5s;
                    }
                    .hero__text {
                    font-size: 1.1rem;
                    margin: 1rem;
                    }
                    .hero__button{
                    width: fit-content;
                    margin: auto
                    }
                    @media (max-width: 59rem) {
                    .hero {
                        min-height: 24rem;
                    }
                    }
                    `}
                </style>
            </section>
        )
    }
