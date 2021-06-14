import React from 'react'
import Head from 'next/head'
import CallToAction from '@components/CallToAction'
import PayCard from '@components/PayCard'

const Atention = () => {
        return (
            
            <React.Fragment>
            <Head>
                <title>Modalidad de intervención</title>
                <meta name="description" content="Aquí encontrarás una guía para concertar tu cita y la modalidad de atención remota, en relación a la pandemia de COVID-19."></meta>
            </Head>
            <main className="main"> 
                <article className="atention">
                    <h1 className="atention__title">Modalidad de intervención</h1>
                    <div className="atention__description">
                        <p>
                        Para garantizar la seguridad de los consultantes en el marco de la pandemia por COVID19 se ha implementado la atención remota a través de videollamada por medio de Whatsapp.
                        </p>
                        <ol className="atention__list">
                            <li>Contactate para resolver cualquier duda y agendar una cita.</li>
                            <CallToAction 
                                link="https://wa.me/message/LBT3GA3KFI23E1"
                                text='Pedir Turno'
                                external={true}
                            />
                            <li>Paga el valor de acuerdo al país en el que recidas a través de los siguientes enlaces.
                                <div className="atention__way-to-pay">
                                    <PayCard
                                        country='Argentina'
                                        price='ARS 1.200'
                                        buttonText='Pagar'
                                        link='https://mpago.la/1kkhwiG'
                                        options= 'Otras opciones: Transferencia por CBU'
                                    />
                                    <PayCard
                                        country='Colombia'
                                        price='COP 70.000'
                                        buttonText='Pagar'
                                        link='https://biz.payulatam.com/L0dc8f07BDCD3EB'
                                        options= 'Otras opciones: Transferencia directa (Bancolombia o Banco Caja Social'
                                    />
                                    <PayCard
                                        country='Otros lugares'
                                        price= 'USD 25'
                                        buttonText='Pagar'
                                        link='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PDTM9FGX4TT7Y'
                                    />
                                </div>
                            </li>
                            <li> El día de la cita contactate al mismo watsapp para realizar la videollamada. Ubicate en un lugar que te sea comodo y cuentes con privacidad.</li>
                        </ol>
                        <p><strong>NOTA: </strong>En caso de que no puedas asistir y hayas realizado el pago comunicate para reprogramar tu cita.</p>

                    </div>
                </article>
                <style jsx>
                    {`
                    .atention {
                    max-width: 60rem;
                    margin: auto;
                    padding: 3rem 2rem;
                    }
                    .atention__list {
                    padding: 1rem 2rem;
                    }
                    .atention__way-to-pay {
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

export default Atention