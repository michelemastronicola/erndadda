import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Gestione dello scroll per evidenziare la sezione attiva
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "vision", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio Fotografico</title>
        <meta name="description" content="Portfolio fotografico professionale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            Portfolio
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
                className={activeSection === "hero" ? styles.active : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className={activeSection === "about" ? styles.active : ""}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#vision" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("vision");
                }}
                className={activeSection === "vision" ? styles.active : ""}
              >
                Vision
              </a>
            </li>
            <li>
              <a 
                href="#contacts" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacts");
                }}
                className={activeSection === "contacts" ? styles.active : ""}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>

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