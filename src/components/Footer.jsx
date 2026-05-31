import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.left}>
          <span className={styles.mono}>dp.dev</span> — Denil José Parada Cabrera
        </span>
        <span className={styles.right}>
          Construido con React + Vite · Desplegado en Railway
        </span>
      </div>
    </footer>
  )
}
