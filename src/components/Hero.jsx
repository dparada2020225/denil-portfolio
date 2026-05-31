import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Grid background */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Glow orb */}
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.span className={styles.badge} {...fadeUp(0.1)}>
          Disponible para nuevas oportunidades
        </motion.span>

        <motion.h1 className={styles.name} {...fadeUp(0.25)}>
          Denil Parada
        </motion.h1>

        <motion.p className={styles.role} {...fadeUp(0.4)}>
          <span className={styles.roleAccent}>Full Stack Developer</span>
          {' '}— React · Node.js · Docker · PostgreSQL
        </motion.p>

        <motion.p className={styles.tagline} {...fadeUp(0.55)}>
          Tercer año de Ciencias de la Computación en la Universidad del Valle de Guatemala.
          Más de 3 años construyendo productos web en producción.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.7)}>
          <a href="#projects" className={styles.btnPrimary}>Ver proyectos</a>
          <a href="#contact" className={styles.btnSecondary}>Contacto</a>
        </motion.div>

        <motion.div className={styles.stats} {...fadeUp(0.85)}>
          <div className={styles.stat}>
            <span className={styles.statNum}>3+</span>
            <span className={styles.statLabel}>años de experiencia</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>85+</span>
            <span className={styles.statLabel}>repositorios públicos</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Full Stack</span>
            <span className={styles.statLabel}>front + back + infra</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
