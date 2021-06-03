import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
    handleClick(){
        const menu = document.querySelector('.navbar__menu')
        const button = document.querySelector('.navbar__button-menu')
        const styleTransform = menu.style.transform
        console.log(menu.style.transform)
        menu.style.transform = !styleTransform ? 'translateX(80vw)' : ""
        button.classList.toggle('navbar__button-close')
    }
    render(){
        return (
            <nav className="navbar">
                <img className="navbar__logo" src={this.props.src} />
                <ul className="navbar__menu">
                    <li className="navbar__element"><Link to="#">Inicio</Link></li>
                    <li className="navbar__element"><Link to="#">Ps. Camilo Gonzalez</Link></li>
                    <li className="navbar__element"><Link to="#">¿Cómo me atiendo?</Link></li>
                    <li className="navbar__element"><Link to="#">Pedir Turno</Link></li>
                </ul>
                <button className="navbar__button-menu" type="button" onClick={this.handleClick}></button>
            </nav>
        )
    }
}

export default Navbar