import React from 'react'
import Navbar from '../components/Navbar'
import logo from '@images/logo.png'
import Footer from '../components/Footer'
import facebookD from '@icons/icon-facebook-dark.svg'
import instagramD from '@icons/icon-instagram-dark.svg'
import twitterD from '@icons/icon-twitter-dark.svg'
import facebookC from '@icons/icon-facebook-clear.svg'
import instagramC from '@icons/icon-instagram-clear.svg'
import twitterC from '@icons/icon-twitter-clear.svg'
import license from '@images/content-license.png'
import freepik from '@images/freepik.svg'
import storyset from '@images/storyset.svg'
import '../assets/styles/Home.css'

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
                email='hola@murocincelado.com'
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