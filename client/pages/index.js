import Head from 'next/head'
import Homepage from '../components/Homepage/Homepage'
import styles from './index.module.scss'

export default function Home() {
  
  return (
    
    <div className={styles.container}>
    <Head>
    <title>amer-al-akkad</title>
    <meta name="description" content="amer-al-akkad-freelancer"/>
    </Head>
      <Homepage/>
    </div>
  )
}
