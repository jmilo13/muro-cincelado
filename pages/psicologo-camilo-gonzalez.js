import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AutorImage from '@components/AutorImage'

const Autor = () => {
        return (
            <React.Fragment>
            <Head>
                <title>Ps. Camilo Gonzalez</title>
                <meta name="description" content="Psicólogo egrsado de la Universidad Santo Tomas, Bogotá, Colombia. Con experiencia en el abordaje de temas relacionados a la sexualidad humana en su diversidad de géneros, orientaciones y organizaciones relacionales."></meta>
            </Head>
            <main className="main"> 
                <article className="autor">
                    <AutorImage src='/images/profile-picture.jpg' alt="Camilo Gonzalez" />
                    <h1 className="autor__title">Ps. Camilo Gonzalez</h1>
                    <div className="autor__description">
                        <p>
                        Gracias por estar aqui. Quisiera contarte un poco de mi y espero te
                        animes a iniciar tu proceso conmigo. Soy psicólogo de la Universidad
                        Santo Tomas en la ciudad de Bogotá D.C. Colombia. Actualmente recido
                        en la Ciudad Autónoma de Buenos Aires, Argentina.
                        </p>
                        <p>
                        En la psicología existen diferentes enfoques y funcionan como marco de
                        refrencia para las intervenciones. En mi caso manejo un enfoque
                        sistémico, el cual me permite entender las situaciones que el
                        consultante experiementa en relacion con los sistemas de los que hace
                        parte (familia, escuela, amigos, vinculos sexo/afectivos), puesto que
                        los sintomas tienen un sentido en esa red de relaciones.
                        </p>
                        <p>
                        Siempre me interesó el estudio de la sexualidad y por ello me vinculé
                        a instituciones que trabajaban temas de Derechos Sexuales y
                        Reproductivos. Esto me permitió incorporar a mi perfil profesional la
                        información necesaria y consolidar una visión amplia de la realidad
                        humana.
                        </p>
                        <p>
                        Este recorrido me llevó a entender que la diversidad se presenta de
                        multiples formas y que se puede observar en múltiples aspectos del ser
                        humano. Las orientaciones sexuales, identidades de género y típos de
                        relación son puntos clave de la sexualidad que cualquier intervención
                        debe tener en cuenta.
                        </p>
                        <p>
                        Por ejemplo, desde pequeños se nos enseña que al hablar de relaciones
                        afectivas y sexuales estas se realizan en parejas de hombre y mujer;
                        cuando en verdad existen muchas otras posibilidades, las cuales
                        enfrentan sus propios desafios y tienen el derecho de recibir el
                        acompañamiento idoneo.
                        </p>
                        <p>
                        Todo acercamiento profesional debe tener implícito un conocimiento
                        amplio de la realidad, para poder brindar apoyos sin prejuicios y
                        señalamientos. En ese sentido, te aseguro que en el espacio que te
                        ofrezco vas a encontrar un ambiente seguro, en el que podras
                        expresarte libremente y compartir cualquier experiencia.
                        </p>
                        <p>
                        <Link href="/modalidad-de-intervencion">Aqui </Link>puedes consultar la modalidad de atención y tarifas. 
                        
                        {/* Si te interesa
                        conocer un poco más de mi pensamiento te invito a leer algunos de
                        los <a href="https://murocincelado.com/articulos/">textos </a>que he
                        escrito. Espero me elijas como tu psicólogo, estare emocionado de
                        apoyarte en tu camino. */}
                        </p>
                    </div>
                </article>
                <style jsx>
                    {`
                    .autor {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 60rem;
                    margin: auto;
                    padding: 3rem 2rem;
                    }
                    .autor__title {
                    margin: 1rem 0;
                    text-align: center;
                    }
                    `}
                </style>
            </main>
            </React.Fragment>
        )
}

export default Autor