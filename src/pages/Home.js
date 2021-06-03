import React from 'react'
import Navbar from '../components/Navbar'
import logo from '@images/logo.png'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import person from '@images/person.svg'
import group from '@images/group.svg'
import facebook from '@icons/icon-facebook.svg'
import instagram from '@icons/icon-instagram.svg'
import twitter from '@icons/icon-twitter.svg'
import '../assets/styles/Home.css'

class Home extends React.Component {
    render(){
        return (
            <section className="home-container"> 
                <Navbar src={logo} socialOne={facebook} socialTwo={instagram} socialThree={twitter}/>
                <Hero 
                    title="Psicoterapia"
                    subtitle="¿Necesitas apoyo?"
                    buttonText="Pedir turno">
                    Esta es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicológico, que afectan la relacion con nosotros mismos y nuestro entorno. 
                </Hero>
                <section className="card-service-container">
                    <ServiceCard src={person} title="Terapia Individual">
                        Orientada a tratar cualquir tipo de malestar psicológico, con el fin de mejorar la calidad de vida y las relaciones interpersonales del consultante.
                    </ServiceCard>
                    <ServiceCard src={group} title="Terapia Relacional">
                        Orientada a abordar dificultades a nivel vincular con una perspectiva respetuosa a la diversidad relacional, sexual y de género.
                    </ServiceCard>
                </section>
                <section>presentacion</section>
                <section>artículos</section>
                <section>footer</section>
            </section>
        )
    }
}

export default Home