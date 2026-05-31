import Reveal from './Reveal'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    name: 'E-commerce Store',
    tag: 'Full Stack · Dockerizado · En producción',
    desc: 'Sistema completo de gestión de tienda: inventario, clientes y ventas. React 18 + Vite en el front, Node.js + Express en el back, PostgreSQL como base de datos. Todo orquestado con Docker Compose y desplegado en Railway.',
    highlights: [
      'Autenticación con sesiones persistidas en PostgreSQL',
      'Transacciones explícitas con ROLLBACK automático si el stock es insuficiente',
      'JOINs, CTEs, Subqueries y VIEWs visibles en la UI',
      'Exportar datos a CSV desde el navegador',
      'Modo oscuro / claro con preferencia persistida',
    ],
    stack: ['React 18', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Railway'],
    github: 'https://github.com/dparada2020225/Proyecto-2-E-commerce',
    live: 'https://proyecto-2-e-commerce-production-877c.up.railway.app',
    featured: true,
  },
  {
    id: 2,
    name: 'Series Tracker',
    tag: 'Full Stack · Vanilla JS · En producción',
    desc: 'Aplicación para registrar y rastrear series. Frontend en JavaScript vanilla puro (sin frameworks) consumiendo una API REST propia. Diseño estilo Netflix. Incluye búsqueda, ordenamiento, paginación y exportación a CSV.',
    highlights: [
      'Sistema de rating con tabla propia y endpoints REST',
      'Búsqueda, filtros y paginación desde el backend',
      'Swagger UI documentando la API',
      'CORS configurado correctamente entre cliente y servidor',
      'Arquitectura separada: cliente y API en repos distintos',
    ],
    stack: ['JavaScript Vanilla', 'Node.js', 'Express', 'MongoDB', 'GitHub Pages'],
    github: 'https://github.com/dparada2020225/series-tracker-api',
    live: 'https://dparada2020225.github.io/series-tracker-client/',
    featured: false,
  },
  {
    id: 3,
    name: 'Calculadora — Lab 7',
    tag: 'React · UI Component',
    desc: 'Calculadora funcional construida en React. Lógica de evaluación de expresiones, manejo de estado con hooks, y diseño responsive. Proyecto enfocado en dominio del ciclo de vida de componentes React.',
    highlights: [
      'Evaluación de expresiones matemáticas',
      'Manejo de errores de expresión inválida',
      'Estado manejado con useState',
      'Diseño responsivo con CSS puro',
    ],
    stack: ['React', 'CSS'],
    github: 'https://github.com/dparada2020225/Lab-7-Calculadora',
    live: null,
    featured: false,
  },
  {
    id: 4,
    name: 'Prueba Técnica — Números Primos & Palíndromos',
    tag: 'Algoritmos · Sin IA · Medio día',
    desc: 'Dos retos algorítmicos resueltos en una prueba técnica para mi trabajo actual. Escritos sin asistencia de IA, con tiempo limitado. Evidencia de razonamiento algorítmico bajo presión.',
    highlights: [
      'Generación eficiente de números primos',
      'Verificación de palíndromos con diferentes enfoques',
      'Código limpio y comentado en tiempo récord',
    ],
    stack: ['JavaScript'],
    github: 'https://github.com/dparada2020225/NumerosPrimos',
    github2: 'https://github.com/dparada2020225/palindromo',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal direction="up">
          <span className="section-label">// proyectos</span>
          <h2 className="section-title">Lo que he construido</h2>
          <p className="section-desc">
            Proyectos reales, no demos de tutorial. Código en producción, decisiones propias,
            y READMEs que no dan vergüenza.
          </p>
        </Reveal>

        {/* Featured project */}
        <Reveal direction="left" delay={0.1} className={styles.featuredWrap}>
          <div className={styles.featured}>
            <div className={styles.featuredBadge}>Proyecto destacado</div>
            <h3 className={styles.featuredName}>{featured.name}</h3>
            <p className={styles.featuredTag}>{featured.tag}</p>
            <p className={styles.featuredDesc}>{featured.desc}</p>
            <ul className={styles.highlights}>
              {featured.highlights.map((h) => (
                <li key={h}><span className={styles.bullet}>▸</span>{h}</li>
              ))}
            </ul>
            <div className={styles.stackRow}>
              {featured.stack.map((s) => (
                <span key={s} className={styles.tag}>{s}</span>
              ))}
            </div>
            <div className={styles.featuredLinks}>
              <a href={featured.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                <GithubIcon /> Código
              </a>
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noreferrer" className={styles.linkBtnPrimary}>
                  Demo en vivo ↗
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* Other projects */}
        <div className={styles.grid}>
          {rest.map((p, i) => (
            <Reveal key={p.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <span className={styles.cardTag}>{p.tag}</span>
                </div>
                <p className={styles.cardDesc}>{p.desc}</p>
                <ul className={styles.cardHighlights}>
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h}><span className={styles.bullet}>▸</span>{h}</li>
                  ))}
                </ul>
                <div className={styles.stackRow}>
                  {p.stack.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <GithubIcon /> GitHub
                  </a>
                  {p.github2 && (
                    <a href={p.github2} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <GithubIcon /> Repo 2
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.linkBtnPrimary}>
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
