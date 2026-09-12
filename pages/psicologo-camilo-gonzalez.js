import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AutorImage from '@components/AutorImage'

const Autor = () => {
        return (
            <React.Fragment>
            <Head>
                <title>Ps. Camilo Gonzalez</title>
                <meta name="description" content="Psicólogo egresado de la Universidad Santo Tomas, Bogotá, Colombia. Con experiencia en el abordaje de temas relacionados a la sexualidad humana en su diversidad de géneros, orientaciones y organizaciones relacionales."></meta>
                <meta property='og:image' content= '/image/profile-picture.jpg' /> 
            </Head>
            <main className="main"> 
                <article className="autor">
                    <AutorImage src='/images/profile-picture.jpg' alt="Camilo Gonzalez" />
                    <h1 className="autor__title">Ps. Camilo Gonzalez</h1>
                    <div className="autor__description">
                        <p>
                        Gracias por estar aqui. Quisiera contarte un poco de mi. Soy psicólogo de la Universidad
                        Santo Tomas en la ciudad de Bogotá D.C. Colombia. Aunque actualmente no ejerzo la profesión, 
                        me gusta escribir de temas relacionados a la sexualidad humana.
                        </p>
                        <p>
                        Siempre me interesaron estos temas, durante mi formación y en mi práctica profesional, por ello me vinculé
                        a instituciones que trabajaban temas de Derechos Sexuales y
                        Reproductivos. Esto me permitió incorporar a mi perfil profesional la
                        información necesaria y consolidar una visión amplia de la realidad
                        humana.
                        </p>
                        <p>
                        Este recorrido me llevó a entender que la diversidad se presenta de
                        multiples formas y que se puede observar en diferentes facetas del ser
                        humano. Las orientaciones sexuales, identidades de género y típos de
                        relación son puntos clave de la sexualidad que cualquier intervención profesional
                        debe tener en cuenta.
                        </p>
                        <p>
                        Por ejemplo, desde pequeños se nos enseña que al hablar de relaciones
                        afectivas y sexuales estas se realizan en parejas de hombre y mujer;
                        cuando en verdad existen muchas otras posibilidades, las cuales
                        enfrentan sus propios desafios.
                        </p>
                        <p>
                        A pesar de que ya no ofrezco un espacio terapéutico, conserve este espacio para escribir y compartir mis ideas y pensamientos.
                        Si te interesa
                        conocer un poco más, te invito a leer algunos de
                        los <Link href="/blog">textos </Link>que he
                        escrito.
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