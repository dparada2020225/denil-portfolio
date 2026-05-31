import { motion } from 'framer-motion'
import Reveal from './Reveal'
import styles from './Certifications.module.css'

/**
 * Solo las certificaciones que tienen peso técnico directo
 * para el rol Full Stack Junior — no las ofimáticas ni de inglés.
 */
const certs = [
  {
    category: 'Redes y protocolos web',
    items: [
      { name: 'CCNA 1 — Introduction to Networks', issuer: 'Cisco', year: '2020' },
      { name: 'CCNA 2 — Switching, Routing & Wireless Essentials', issuer: 'Cisco', year: '2020' },
    ],
    note: 'Base formal sobre DNS, HTTP/HTTPS, TCP/IP, ciclo de una solicitud web. Lo que la mayoría aprende "de oído", yo lo aprendí con simuladores de red.',
  },
  {
    category: 'React y ecosistema frontend',
    items: [
      { name: 'Curso Profesional de React', issuer: 'codigofacilito', year: '2022' },
      { name: 'Curso de Fundamentos de React', issuer: 'codigofacilito', year: '2022' },
      { name: 'Curso Intensivo React JS', issuer: 'Level Up', year: '2022' },
      { name: 'Curso Básico de Tailwind 2 y 3', issuer: 'Platzi', year: '2023' },
    ],
    note: null,
  },
  {
    category: 'CSS y diseño para desarrollo',
    items: [
      { name: 'Curso Profesional de CSS Grid Layout', issuer: 'Platzi', year: '2023' },
      { name: 'Curso de Diseño Web con CSS Grid y Flexbox', issuer: 'Platzi', year: '2023' },
      { name: 'Curso de Responsive Design: Mobile First', issuer: 'Platzi', year: '2023' },
      { name: 'Curso de Animaciones con CSS', issuer: 'Platzi', year: '2023' },
      { name: 'Curso de Transformaciones y Transiciones en CSS', issuer: 'Platzi', year: '2023' },
      { name: 'Curso de Diseño para Developers', issuer: 'Platzi', year: '2023' },
    ],
    note: null,
  },
  {
    category: 'Testing — Angular Unit Testing',
    items: [
      { name: 'Unit Testing para Servicios', issuer: 'Platzi', year: '2023' },
      { name: 'Unit Testing para Componentes', issuer: 'Platzi', year: '2023' },
      { name: 'Unit Testing para Formularios', issuer: 'Platzi', year: '2023' },
    ],
    note: 'Principios de testing unitario aplicados luego en Vitest + React Testing Library en el proyecto E-commerce.',
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <Reveal direction="up">
          <span className="section-label">// certificaciones</span>
          <h2 className="section-title">Formación técnica verificable</h2>
          <p className="section-desc">
            Selección de las certificaciones con mayor peso técnico directo para el rol.
          </p>
        </Reveal>

        <div className={styles.groups}>
          {certs.map((group, gi) => (
            <Reveal key={group.category} direction={gi % 2 === 0 ? 'left' : 'right'} delay={gi * 0.08}>
              <div className={styles.group}>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <ul className={styles.list}>
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item.name}
                      className={styles.item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + ii * 0.05 }}
                    >
                      <div className={styles.itemLeft}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemIssuer}>{item.issuer}</span>
                      </div>
                      <span className={styles.itemYear}>{item.year}</span>
                    </motion.li>
                  ))}
                </ul>
                {group.note && (
                  <p className={styles.note}>
                    <span className={styles.noteIcon}>→</span> {group.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
