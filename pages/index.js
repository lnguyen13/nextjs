import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          YES! 🚀
        </h1>
    <p>You like the stock. Why wouldn't you?</p>
    <a href="https://shouldibuygme.com" class="btn btn-info" role="button">Next Step</a>
      </main>
    </div>
  )
}
