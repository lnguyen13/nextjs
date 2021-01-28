import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Should I Hold GME?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          YES! 🚀
        </h1>
    <p class="description">You like the stock. Why wouldn't you? <br/> <a href="https://shouldibuygme.com">Next Step</a></p>
    
      </main>
    <footer>The contents on this site are for informational and entertainment purposes only and does not constitute financial, accounting, or legal advice.</footer>
    </div>
  )
}
