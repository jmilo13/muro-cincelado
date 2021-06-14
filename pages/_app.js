import React from 'react'
import Head from 'next/head'
import Layout from '@components/Layout'
import '../global.css'

function MyApp({ Component, pageProps }) {
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
  
  export default MyApp