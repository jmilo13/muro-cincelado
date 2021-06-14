import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const logo = '/images/logo.png'
const facebookD = '/icons/icon-facebook-dark.svg'
const instagramD = '/icons/icon-instagram-dark.svg'
const twitterD = '/icons/icon-twitter-dark.svg'
const facebookC = '/icons/icon-facebook-clear.svg'
const instagramC = '/icons/icon-instagram-clear.svg'
const twitterC = '/icons/icon-twitter-clear.svg'
const license = '/images/content-license.png'
const freepik = '/images/freepik.svg'
const storyset = '/images/storyset.svg'
// import '../assets/styles/Home.css'

export default function Layout (props) {
    return (
        <React.Fragment> 
            <Navbar 
                src={logo} 
                socialOne={facebookD} 
                linkOne= 'https://www.facebook.com/murocincelado.psicoterapia/'
                socialTwo={instagramD} 
                linkTwo= 'https://www.instagram.com/murocincelado.psicoterapia/'
                socialThree={twitterD}
                linkThree= 'https://twitter.com/murocincelado'
            />
                {props.children}
            <Footer 
                socialOne={facebookC} 
                linkOne= 'https://www.facebook.com/murocincelado.psicoterapia/'
                socialTwo={instagramC} 
                linkTwo= 'https://www.instagram.com/murocincelado.psicoterapia/'
                socialThree={twitterC}
                linkThree= 'https://twitter.com/murocincelado'
                location='Ciudad autónoma de Buenos Aires, Argentina'
                email='murocincelado@gmail.com'
                license='https://creativecommons.org/licenses/by-sa/4.0/'
                imageLicense={license}
                icons={freepik}
                iconsLink='https://www.flaticon.es/autores/freepik'
                draws={storyset}
                drawsLink='https://storyset.com/'
            />
        </React.Fragment>
    )
}