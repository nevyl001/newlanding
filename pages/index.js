import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>landing-1</title>
        <meta name="landing" content="lanidng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.upload}>
            <svg viewBox="0 0 72 72">
              <path
                d="M36.493 72C16.118 72 0 55.883 0 36.493 0 16.118 16.118 0 36.493 0 55.882 0 72 16.118 72 36.493 72 55.882 55.883 72 36.493 72zM34 34h-9c-.553 0-1 .452-1 1.01v1.98A1 1 0 0 0 25 38h9v9c0 .553.452 1 1.01 1h1.98A1 1 0 0 0 38 47v-9h9c.553 0 1-.452 1-1.01v-1.98A1 1 0 0 0 47 34h-9v-9c0-.553-.452-1-1.01-1h-1.98A1 1 0 0 0 34 25v9z"
                fill="#409fff"
                fillRule="nonzero"
              ></path>
            </svg>
            <div className={styles.upload_text}>
              <h2>Subir archivos</h2>
              <button>O selecciona una carpeta</button>
            </div>
          </div>
          <div className={styles.textfield}>
            <label htmlFor="first">Nombre:</label>
            <input type="text" id="name" name="Nombre" />
          </div>
          <div className={styles.textfield}>
            <label htmlFor="first">Nombre de la pieza:</label>
            <input type="text" id="pieza" name="pieza" />
          </div>
          <div className={styles.textfield}>
            <label htmlFor="last">Email:</label>
            <input type="email" id="email" name="Email" />
          </div>
          <div className={styles.btn_2}>
            <button>Enviar</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
