import Reveal from './Reveal'
import styles from './About.module.css'

const facts = [
  { icon: '🎓', label: 'Universidad', value: 'Universidad del Valle de Guatemala' },
  { icon: '📚', label: 'Carrera', value: 'Ciencias de la Computación y Tecnologías de la Información — 5to semestre' },
  { icon: '💼', label: 'Trabajo actual', value: 'Desarrollador Web en BYTE (ene. 2023 – presente)' },
  { icon: '📍', label: 'Ubicación', value: 'Guatemala' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout}>
          <Reveal direction="left" className={styles.left}>
            <span className="section-label">// sobre mí</span>
            <h2 className="section-title">Construyo productos,<br />no solo código</h2>
            <p className={styles.bio}>
              Soy Denil Parada, desarrollador full stack guatemalteco con más de 3 años
              de experiencia profesional. Empecé desde el peritaje técnico en Kinal y llegué
              a la universidad con proyectos reales en producción.
            </p>
            <p className={styles.bio}>
              Me interesa escribir código que tenga criterio: que el stack elegido tenga sentido
              para el problema, que la arquitectura escale, y que el próximo developer
              (o yo mismo en 6 meses) pueda entender lo que hice.
            </p>
            <p className={styles.bio}>
              Fuera del teclado: karate kempo, olimpiadas de matemáticas, y dos cursos
              de bombero voluntario.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.1} className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardDot} />
                <span className={styles.cardDot} />
                <span className={styles.cardDot} />
                <span className={styles.cardTitle}>denil.info</span>
              </div>
              <ul className={styles.facts}>
                {facts.map((f) => (
                  <li key={f.label} className={styles.fact}>
                    <span className={styles.factIcon}>{f.icon}</span>
                    <div>
                      <span className={styles.factLabel}>{f.label}</span>
                      <span className={styles.factValue}>{f.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                <a
                  href="https://github.com/dparada2020225"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkBtn}
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/denil-josè-parada-cabrera/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkBtn}
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
