import React from 'react'
import Head from 'next/head'
import CallToAction from '@components/CallToAction'

export default function Custom404() {
    return (
        <React.Fragment>
            <Head>
                <title>Muro Cincelado - 404</title>
                <meta name="description" content="La psicoterapia es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicológico. Aquí podras encontrar apoyo y orientación especialmente sobre la diversidad en la sexualidad humana."></meta>
            </Head>
        <section className="not-found">
            <img className="not-found__image" src='/images/404.svg' alt="404_página_no_encontrada"></img>
            <div className="not-found__description-container">
                <h2 className="not-found__aditional-description">La sección de blog volverá el 20 de julio 2021</h2>
                <h3 className="not-found__description">Disculpa, la página que estas buscando no está disponible. Visita otra en el menú superior</h3>
                <CallToAction link="/" text="Inicio"/>
            </div>
            <style jsx>
                {`
                .not-found {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin: 2rem 0;
                flex-wrap: wrap;
                }
                .not-found__image {
                max-width: 30rem;
                }
                .not-found__description-container *{
                margin: 1rem auto;
                text-align: center;
                }
                .not-found__description {
                max-width: 20rem;
                padding: 2rem;
                border-bottom: 1px solid;
                border-top: 1px solid;
                }
                `}
            </style>
        </section>
        </React.Fragment>
    )
  }

