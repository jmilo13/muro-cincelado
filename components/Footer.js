import React from 'react'

export default function Footer (props) {
    const { socialOne, socialTwo, socialThree, location, email, license, imageLicense, draws, icons, iconsLink, drawsLink, linkOne, linkTwo, linkThree} = props
    return (
        <footer className="footer">
            <div className="footer__social">
                <h2 className="footer__title">Síguenos</h2>
                <div className="footer__data-container">
                    <a href={linkOne} target="_blanck" rel='noreferrer noopener'><img src={socialOne} className="footer__media"/></a>
                    <a href={linkTwo} target="_blanck" rel='noreferrer noopener'><img src={socialTwo} className="footer__media" /></a>
                    <a href={linkThree} target="_blanck" rel='noreferrer noopener'><img src={socialThree} className="footer__media" /></a>
                </div>
            </div>
            <div className="footer__contact">
                <h2 className="footer__title">Contacto</h2>
                <div className="footer__data-container">
                    <h3>Ubicación</h3>
                    <p>{location}</p>
                </div>
                <div className="footer__data-container">
                    <h3>Correo electronico</h3>
                    <a href={`mailto:${email}`} target="_blanck">{email}</a>
                </div>
            </div>
            <div className="footer__license">
                    <h2 className="footer__title">Créditos</h2>
                    <div className="footer__data-container">
                        <a href={license} target="_blanck" rel='noreferrer noopener'><img src={imageLicense} alt="licencia de contenido" /></a>
                        <a href={iconsLink} target="_blanck" rel='noreferrer noopener'><img src={icons} alt="freepik" /></a>
                        <a href={drawsLink} target="_blanck" rel='noreferrer noopener'><img src={draws} alt="storyset" /></a>
                    </div>
            </div>
            <style jsx>
                {`
                .footer {
                    display: flex;
                    padding: 2rem;
                    justify-content: space-between;
                    background-color: var(--secondary-color);
                    color: var(--letter-on-dark);
                    }
                    footer div,
                    .footer__data-container {
                    padding: 1rem;
                    }
                    .footer__data-container a {
                    color: var(--letter-on-dark);
                    }
                    .footer__title {
                    margin: 1.5rem 0;
                    }
                    .footer__media {
                    display: inline-block;
                    max-width: 3rem;
                    max-height: 2.5rem;
                    margin: 0 0.6rem;
                    }
                    .footer img {
                    transition: all 0.5s;
                    }
                    .footer__license img {
                    display: block;
                    max-height: 2rem;
                    margin: 1rem auto;
                    }
                    .footer img:hover {
                    opacity: 0.7;
                    }
                    
                    @media (max-width: 59rem) {
                    .footer {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    footer > div:not(:last-child)::after {
                        display: inline-block;
                        content: "";
                        border-bottom: solid 1px;
                        min-width: 17rem;
                    }
                    }
                `}
            </style>
        </footer>
    )
}
