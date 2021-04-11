import Head from 'next/head'
import Homepage from '../components/Homepage/Homepage'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage/>
    </div>
  )
}
