import React from 'react'
import Link from 'next/link'


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
                <Link href="/"><img className="header__logo" src={this.props.src} /></Link>
                <div className="navbar">
                    <ul className="navbar__list-elements">
                        <li className="navbar__element">
                          <Link href="/">
                            <a onClick={this.handleClick}>Inicio</a>
                          </Link></li>
                        <li className="navbar__element">
                          <Link href="/psicologo-camilo-gonzalez">
                            <a onClick={this.handleClick}>Ps. Camilo Gonzalez</a>
                          </Link>
                        </li>
                        <li className="navbar__element">
                          <Link href="/modalidad-de-intervencion"> 
                            <a onClick={this.handleClick}>¿Cómo me atiendo?</a>
                          </Link></li>
                        <li className="navbar__element"><a href="https://api.whatsapp.com/message/LBT3GA3KFI23E1" target="_blank" rel='noreferrer noopener'>Pedir Turno</a></li>
                    </ul>
                    <div className="navbar__social">
                        <a href={this.props.linkOne} target="_blank" rel='noreferrer noopener'><img src={this.props.socialOne} className="navbar__media"/></a>
                        <a href={this.props.linkTwo} target="_blank" rel='noreferrer noopener'><img src={this.props.socialTwo} className="navbar__media"/></a>
                        <a href={this.props.linkThree} target="_blank" rel='noreferrer noopener'><img src={this.props.socialThree} className="navbar__media"/></a>
                    </div>
                </div>
                <button className="navbar__button-menu" type="button" onClick={this.handleClick}></button>
                {this.props.children}
                <style jsx>
                    {`
                        .header {
                            position: sticky;
                            top: 0;
                            display: flex;
                            padding: 0.5rem 1rem;
                            align-items: center;
                            justify-content: space-between;
                            background: var(--background-nav);
                            box-shadow: 0px 3px 17px -9px rgb(0 0 0 / 75%);
                            z-index: 1;
                          }
                          .header__logo {
                            max-height: 4rem;
                            max-width: 70%;
                            transition: all 0.5s;
                            cursor: pointer;
                          }
                          .header__logo:hover {
                            opacity: 0.7;
                          }
                          .navbar {
                            display: flex;
                            width: 60%;
                            justify-content: flex-end;
                          }
                          .navbar__list-elements {
                            display: flex;
                            width: 90%;
                            max-width: 45rem;
                            justify-content: space-between;
                            align-items: center;
                            text-align: center;
                            list-style: none;
                          }
                          .navbar__element a {
                            text-decoration: none;
                            color: var(--letter-on-white);
                            transition: 0.4s;
                          }
                          .navbar__element a:hover {
                            color: var(--primary-color);
                          }
                          .navbar__button-menu {
                            display: none;
                          }
                          .navbar__social {
                            display: flex;
                            justify-content: space-between;
                            margin-left: 1rem;
                          }
                          .navbar__media {
                            display: block;
                            max-width: 1.5rem;
                            margin: 0 0.2rem;
                          }
                          
                          @media (max-width: 59rem) {
                            .navbar__overlay {
                              position: absolute;
                              background-color: gray;
                              top: 0;
                              left: 0;
                              right: 0;
                              bottom: 0;
                            }
                            .navbar {
                              position: absolute;
                              flex-direction: column;
                              justify-content: space-evenly;
                              align-items: center;
                              top: 0;
                              left: -80vw;
                              height: 100vh;
                              width: 80vw;
                              padding: 2rem;
                              background: var(--background-nav);
                              transition: all 0.5s;
                              box-shadow: inset -4px 0px 17px 0px #c7c7c7;
                              font-size: 1.2rem;
                            }
                            .navbar__list-elements {
                              flex-direction: column;
                              min-height: 15rem;
                              width: 85%;
                              justify-content: space-evenly;
                              border-bottom: solid #c7c7c7;
                            }
                            .navbar__social {
                              min-width: 10rem;
                              margin: 0;
                              justify-content: space-between;
                            }
                            .navbar__media {
                              max-width: 2.5rem;
                            }
                            .navbar__button-menu {
                              display: block;
                              width: 2rem;
                              height: 2rem;
                              border: none;
                              background: url('/icons/icon-menu.svg') center/cover no-repeat;
                            }
                            .navbar__button-close {
                              background: url('/icons/icon-close.svg') center/cover no-repeat; 
                            }
                          }
                    `}
                </style>
            </header>
            
        )
    }
}

export default Navbar