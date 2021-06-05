import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
    handleClick(){
        const menu = document.querySelector('.navbar')
        const button = document.querySelector('.navbar__button-menu')
        const styleTransform = menu.style.transform
        console.log(menu.style.transform)
        menu.style.transform = !styleTransform ? 'translateX(80vw)' : ""
        button.classList.toggle('navbar__button-close')
    }
    render(){
        return (
            <header className="header">
                <Link to="/"><img className="header__logo" src={this.props.src} /></Link>
                <div className="navbar">
                    <ul className="navbar__list-elements">
                        <li className="navbar__element"><Link to="/">Inicio</Link></li>
                        <li className="navbar__element"><Link to="#">Ps. Camilo Gonzalez</Link></li>
                        <li className="navbar__element"><Link to="#">¿Cómo me atiendo?</Link></li>
                        <li className="navbar__element"><Link to="#">Pedir Turno</Link></li>
                    </ul>
                    <div className="navbar__social">
                        <a href=""><img src={this.props.socialOne} className="navbar__media"/></a>
                        <a href=""><img src={this.props.socialTwo} className="navbar__media" /></a>
                        <a href=""><img src={this.props.socialThree} className="navbar__media" /></a>
                    </div>
                </div>
                <button className="navbar__button-menu" type="button" onClick={this.handleClick}></button>
            </header>
        )
    }
}

export default Navbar