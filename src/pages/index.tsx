import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Fotografico</title>
        <meta name="description" content="Portfolio fotografico professionale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section id="hero" className={styles.hero}>
          <div className={styles.container}>
            <h1>Hero Section</h1>
            <p>Il tuo portfolio fotografico inizia qui</p>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <h2>About Me</h2>
            <p>Racconta la tua storia</p>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className={styles.vision}>
          <div className={styles.container}>
            <h2>Vision</h2>
            <p>La tua visione artistica</p>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className={styles.contacts}>
          <div className={styles.container}>
            <h2>Contacts</h2>
            <p>Mettiamoci in contatto</p>
          </div>
        </section>
      </main>
    </>
  );
}