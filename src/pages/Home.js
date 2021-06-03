import React from 'react'
import Navbar from '../components/Navbar'
import logo from '@images/logo.png'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import person from '@images/person.svg'
import group from '@images/group.svg'

class Home extends React.Component {
    render(){
        return (
            <section> 
                <Navbar src={logo}/>
                <Hero 
                    title="Psicoterapia"
                    subtitle="¿Necesitas apoyo?"
                    buttonText="Pedir turno">
                    Esta es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicológico, que afectan la relacion con nosotros mismos y nuestro entorno. 
                </Hero>
                <ServiceCard src={person} title="Terapia Individual">
                    Orientada a tratar cualquir tipo de malestar psicológico, con el fin de mejorar la calidad de vida y las relaciones interpersonales del consultante.
                </ServiceCard>
                <ServiceCard src={group} title="Terapia Relacional">
                    Orientada a abordar dificultades a nivel vincular con una perspectiva respetuosa a la diversidad relacional, sexual y de género.
                </ServiceCard>
            </section>
        )
    }
}

export default Home