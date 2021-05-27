import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'

class Navbar extends React.Component {
    handleClick(){
        const menu = document.querySelector('.navbar__menu')
        const styleTransform = menu.style.transform
        console.log(menu.style.transform)
        menu.style.transform = !styleTransform ? 'translateX(11rem)' : ""
    }
    render(){
        return (
            <nav className="navbar">
                <img className="navbar__logo" src={this.props.src} />
                <ul className="navbar__menu">
                    <li className="navbar__element"><Link to="#">Enlace</Link></li>
                    <li className="navbar__element"><Link to="#">Enlace</Link></li>
                    <li className="navbar__element"><Link to="#">Enlace</Link></li>
                    <li className="navbar__element"><Link to="#">Enlace</Link></li>
                </ul>
                <button type="button" onClick={this.handleClick}>oprimir</button>
            </nav>
        )
    }
}

export default Navbar