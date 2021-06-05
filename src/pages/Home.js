import React from 'react'

import Hero from '../components/Hero'
import Services from '../components/Services'
import PresentationCard from '../components/PresentationCard'
import NoticeCard from '../components/NoticeCard'

import profilePicture from '@images/profile-picture.jpg'
import covid from '@images/covid.svg'



import '../assets/styles/Home.css'

export default class Home extends React.Component {
    render(){
        return (
            <main className="home-container"> 
                <Hero 
                    title="Psicoterapia"
                    subtitle="¿Necesitas apoyo?"
                    buttonText="Pedir turno"
                >
                    Esta es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicológico, que afectan la relacion con nosotros mismos y nuestro entorno. 
                </Hero>
                <Services />
                <PresentationCard 
                    name="Ps. Camilo Gonzalez"    
                    src={profilePicture}   
                    studies="Psicologo de la Universidad Santo Tomas. Bogotá D.C. Colombia"
                    invitation="Te invito a leer un poco sobre mi"
                    link="./ps-camilo-gonzalez"         
                />
                <NoticeCard
                    title="Situación COVID"    
                    src={covid}   
                    alt="joven_con_mascarilla"
                    link="./modalidad-intervencion"   
                >
                    Para garantizar la seguridad de los consultantes en el marco de la pandemia por COVID-19 se ha implementado la atención remota a través de videollamada por medio de Whatsapp. Si deseas mayor información te invito a leer los pasos para agendar tu cita.
                </NoticeCard>
            </main>
        )
    }
}