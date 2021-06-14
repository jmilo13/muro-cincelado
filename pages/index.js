import React from 'react'
import Head from 'next/head'

import Hero from '@components/Hero'
import Services from '@components/Services'
import PresentationCard from '@components/PresentationCard'
import NoticeCard from '@components/NoticeCard'

export default class Home extends React.Component {
    render(){
        return (
            <React.Fragment>
            <Head>
                <title>Muro Cincelado - Inicio</title>
                <meta name="description" content="La psicoterapia es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicológico. Aquí podras encontrar apoyo y orientación especialmente sobre la diversidad en la sexualidad humana."></meta>
            </Head>
            <main className="main"> 
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
                    src={'/images/profile-picture.jpg'}   
                    studies="Psicologo de la Universidad Santo Tomas. Bogotá D.C. Colombia"
                    invitation="Te invito a leer un poco sobre mi"
                    link="/psicologo-camilo-gonzalez"         
                />
                <NoticeCard
                    title="Situación COVID"    
                    src={'/images/covid.svg'}   
                    alt="joven_con_mascarilla"
                    link="/modalidad-de-intervencion"   
                >
                    Para garantizar la seguridad de los consultantes en el marco de la pandemia por COVID-19 se ha implementado la atención remota a través de videollamada por medio de Whatsapp. Si deseas mayor información te invito a leer los pasos para agendar tu cita.
                </NoticeCard>
                <style jsx>
                    {`
                        .card-service-container {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-evenly;
                            }
                    `}
                </style>
            </main>
            </React.Fragment>
        )
    }
}