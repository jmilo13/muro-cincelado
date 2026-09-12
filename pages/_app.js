import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import Loading from '@components/Loading'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const handleRouteChangeStart = () => setLoad(true)
        const handleRouteChangeDone = () => setLoad(false)

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeDone)
        router.events.on('routeChangeError', handleRouteChangeDone)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeDone)
            router.events.off('routeChangeError', handleRouteChangeDone)
        }
    }, [router.events])

    if (load) {
       return <Loading />
    }

    return (
        <React.Fragment>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </React.Fragment>
    )
}
