import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      hello
    </div>
  )
}
