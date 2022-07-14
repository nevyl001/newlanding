import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>landing-1</title>
        <meta name="landing" content="lanidng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.section_1}>
          <div className={styles.section_left}>
            <div className={styles.upload_1}>
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
                </div>
              </div>
              <div className={styles.textfield}>
                <label htmlFor="last">Email:</label>
                <input type="email" id="email" name="Email" />
              </div>
            </div>
            <div className={styles.label_1}>
              <label>
                <input type="checkbox" id="cbox1" value="checkbox" /> Acepto
                términos y condiciones
              </label>
            </div>
            <div className={styles.btn}>
              <a href="#">Enviar</a>
            </div>
          </div>
          <div className={styles.section_rigth}>
            <Image src="/img/Arte.png" alt="Logo" width={1319} height={1450} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.section_2}>
            <h1>
              Sonidos que
              <br /> te mueven.
            </h1>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
