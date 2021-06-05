import React from 'react'

import ServiceCard from '../components/ServiceCard'

import person from '@images/person.svg'
import group from '@images/group.svg'

import '../assets/styles/Services.css'

export default function Service () {
        return (
            <section className="card-service-container">
                <ServiceCard src={person} title="Terapia Individual">
                    Orientada a tratar cualquir tipo de malestar psicológico, con el fin de mejorar la calidad de vida y las relaciones interpersonales del consultante.
                </ServiceCard>
                <ServiceCard src={group} title="Terapia Relacional">
                    Orientada a abordar dificultades a nivel vincular con una perspectiva respetuosa a la diversidad relacional, sexual y de género.
                </ServiceCard>
            </section>

        )
}
