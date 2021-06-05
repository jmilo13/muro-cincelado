import React from 'react'


import '../assets/styles/Footer.css'

export default function Footer (props) {
    const { socialOne, socialTwo, socialThree, location, email, license, imageLicense, draws, icons, iconsLink, drawsLink} = props
    return (
        <footer className="footer">
            <div className="footer__social">
                <h2 className="footer__title">Síguenos</h2>
                <div className="footer__data-container">
                    <a href=""><img src={socialOne} className="footer__media"/></a>
                    <a href=""><img src={socialTwo} className="footer__media" /></a>
                    <a href=""><img src={socialThree} className="footer__media" /></a>
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
                        <a href={license} target="_blanck"><img src={imageLicense} alt="licencia de contenido" /></a>
                        <a href={iconsLink} target="_blanck"><img src={icons} alt="freepik" /></a>
                        <a href={drawsLink} target="_blanck"><img src={draws} alt="storyset" /></a>
                    </div>
            </div>
        </footer>
    )
}
