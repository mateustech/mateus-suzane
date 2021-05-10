import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mateus e Suzane</title>
        <meta name="description" content="Aceita ser nossos padrinhos?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aceita ser nossos<a href="">Padrinhos?</a>
        </h1>

      
      </main>

     
    </div>
  )
}
