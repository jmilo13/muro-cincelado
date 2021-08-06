import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import Loading from '@components/Loading'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        const handleRouteChange = () => {
            setLoad(true)
        }
        const handleRouteChangeOff = () => {
            router.events.off('routeChangeStart', handleRouteChangeOff)
            setLoad(false)
            return () => {
             router.events.off('routeChangeComplete', handleRouteChangeOff)
            }
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteChangeOff)
    })

    if(load){
       return <Loading />
    }else{
        return (     
        <React.Fragment>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </React.Fragment>
    )
  }
}
  
