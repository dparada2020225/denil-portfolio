import { motion } from 'framer-motion'
import Reveal from './Reveal'
import styles from './Technologies.module.css'

const stack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'Principal', desc: 'SPAs, hooks, context, React Router. Mi framework de elección para todo proyecto nuevo.' },
      { name: 'JavaScript', level: 'Sólido', desc: 'Async/await, Promises, fetch, DOM. Base sobre la que construí todo lo demás.' },
      { name: 'TypeScript', level: 'Intermedio', desc: 'Tipado estático en proyectos donde la escala lo justifica.' },
      { name: 'CSS / Tailwind', level: 'Sólido', desc: 'Responsive design, CSS variables, animaciones. Diseño como parte del código, no un afterthought.' },
      { name: 'Vite', level: 'Diario', desc: 'Build tool por defecto. Configuración de entornos, optimización de assets.' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js + Express', level: 'Sólido', desc: 'APIs REST, middleware, autenticación con sesiones y JWT. Servidor propio en varios proyectos.' },
      { name: 'PostgreSQL', level: 'Sólido', desc: 'Diseño de esquemas, JOINs, CTEs, transacciones explícitas, vistas. No solo SELECT * FROM.' },
      { name: 'MongoDB', level: 'Intermedio', desc: 'Modelos con Mongoose para proyectos donde el esquema flexible tiene sentido.' },
      { name: 'Angular', level: 'Intermedio', desc: 'Servicios, módulos, testing unitario (servicios, componentes, formularios).' },
    ],
  },
  {
    category: 'Infraestructura',
    items: [
      { name: 'Docker', level: 'Sólido', desc: 'Dockerfiles multi-stage, Docker Compose para orquestar frontend + backend + DB. Deploy en Railway.' },
      { name: 'Git / GitHub', level: 'Diario', desc: 'Commits descriptivos, ramas por feature, PRs. El historial cuenta la historia del proyecto.' },
      { name: 'Railway', level: 'Activo', desc: 'Plataforma de deploy para proyectos dockerizados. Configuración de variables de entorno en producción.' },
    ],
  },
]

const levelColor = {
  Principal: '#4a8fd4',
  Sólido: '#5cb85c',
  Diario: '#4a8fd4',
  Intermedio: '#f0ad4e',
  Activo: '#5cb85c',
}

export default function Technologies() {
  return (
    <section className={`section ${styles.section}`} id="technologies">
      <div className="container">
        <Reveal direction="up">
          <span className="section-label">// tecnologías</span>
          <h2 className="section-title">Stack elegido con criterio</h2>
          <p className="section-desc">
            No uso todo lo que aparece en un roadmap. Uso lo que mejor resuelve el problema.
            Aquí está el stack que domino y por qué lo elegí.
          </p>
        </Reveal>

        <div className={styles.groups}>
          {stack.map((group, gi) => (
            <Reveal key={group.category} direction={gi % 2 === 0 ? 'left' : 'right'} delay={gi * 0.1}>
              <div className={styles.group}>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <div className={styles.items}>
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      className={styles.item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: gi * 0.1 + ii * 0.07, duration: 0.5 }}
                    >
                      <div className={styles.itemHeader}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span
                          className={styles.itemLevel}
                          style={{ color: levelColor[item.level] ?? '#8b9ab3', borderColor: (levelColor[item.level] ?? '#8b9ab3') + '40' }}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
