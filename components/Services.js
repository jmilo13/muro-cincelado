import React from 'react'
import ServiceCard from './ServiceCard'


export default function Service () {
        return (
            <section className="card-service-container">
                <ServiceCard src={'/images/person.svg'} title="Terapia Individual">
                    Orientada a tratar cualquir tipo de malestar psicológico, con el fin de mejorar la calidad de vida y las relaciones interpersonales del consultante.
                </ServiceCard>
                <ServiceCard src={'/images/group.svg'} title="Terapia Relacional">
                    Orientada a abordar dificultades a nivel vincular con una perspectiva respetuosa a la diversidad relacional, sexual y de género.
                </ServiceCard>
                <style jsx>
                    {`
                    .card-service-container {
                        margin: 2rem 0;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                    }
                    `}
                </style>
            </section>

        )
}
