import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
    handleClick(){
        if (screen.width < 945) {
            const menu = document.querySelector('.navbar')
            const button = document.querySelector('.navbar__button-menu')
            const styleTransform = menu.style.transform
            menu.style.transform = !styleTransform ? 'translateX(80vw)' : ""
            button.classList.toggle('navbar__button-close')
        }
    }
    render(){
        return (
            <header className="header">
                <Link to="/"><img className="header__logo" src={this.props.src} /></Link>
                <div className="navbar">
                    <ul className="navbar__list-elements">
                        <li className="navbar__element"><Link to="/" onClick={this.handleClick}>Inicio</Link></li>
                        <li className="navbar__element"><Link to="/psicologo-camilo-gonzalez" onClick={this.handleClick}>Ps. Camilo Gonzalez</Link></li>
                        <li className="navbar__element"><Link to="/modalidad-de-intervencion" onClick={this.handleClick}>¿Cómo me atiendo?</Link></li>
                        <li className="navbar__element"><a href="https://api.whatsapp.com/message/LBT3GA3KFI23E1" target="_blank" rel='noreferrer noopener'>Pedir Turno</a></li>
                    </ul>
                    <div className="navbar__social">
                        <a href={this.props.linkOne} target="_blank" rel='noreferrer noopener'><img src={this.props.socialOne} className="navbar__media"/></a>
                        <a href={this.props.linkTwo} target="_blank" rel='noreferrer noopener'><img src={this.props.socialTwo} className="navbar__media"/></a>
                        <a href={this.props.linkThree} target="_blank" rel='noreferrer noopener'><img src={this.props.socialThree} className="navbar__media"/></a>
                    </div>
                </div>
                <button className="navbar__button-menu" type="button" onClick={this.handleClick}></button>
            </header>
        )
    }
}

export default Navbar