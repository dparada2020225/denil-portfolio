import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.left}>
          <span className={styles.mono}>dp.dev</span> — Denil José Parada Cabrera
        </span>
        <a
          href="https://denil-portfolio-production.up.railway.app"
          className={styles.right}
          target="_blank"
          rel="noreferrer"
        >
          denil-portfolio-production.up.railway.app ↗
        </a>
      </div>
    </footer>
  )
}
