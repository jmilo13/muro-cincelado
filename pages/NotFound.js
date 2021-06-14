import React from 'react'
import notFound from '../assets/images/404.svg'
import '../assets/styles/NotFound.css'


export default function NotFound () {
    return (
        <section className="not-found">
            <img className="not-found__image" src={notFound} alt="404_página_no_encontrada"></img>
            <h2 className="not-found__description">Disculpa, pero la página que estas buscando no está disponible. Visita otra en el menú superior</h2>
        </section>
    )
}

