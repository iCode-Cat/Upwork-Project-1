import Layout from '../components/Layout'
import '../styles/globals.scss'
import {useState} from 'react';

function MyApp({ Component, pageProps }) {



  return <Layout>
 <Component {...pageProps} />
  </Layout>
 
}

export default MyApp
