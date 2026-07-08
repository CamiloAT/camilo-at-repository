import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaMusic, FaGamepad, FaCode, FaBook, FaHeadphones, FaFilm } from 'react-icons/fa'
import './Interests.css'

const INTERESTS = [
  { name: 'Musica', icon: FaMusic, description: 'Lo que suena mientras programno' },
  { name: 'Videojuegos', icon: FaGamepad, description: 'Momentos de escape' },
  { name: 'Coding Side Projects', icon: FaCode, description: 'Por diversion, no por obligacion' },
  { name: 'Lectura', icon: FaBook, description: 'Tecnologia y algo de ficcion' },
  { name: 'Podcasts', icon: FaHeadphones, description: 'Aprendizaje mientras camino' },
  { name: 'Cine', icon: FaFilm, description: 'Historias bien contadas' },
]

const PLAYLIST = [
  { title: 'Blinding Lights', artist: 'The Weeknd' },
  { title: 'Bohemian Rhapsody', artist: 'Queen' },
  { title: 'Dream On', artist: 'Aerosmith' },
  { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
  { title: 'Hotel California', artist: 'Eagles' },
  { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
]

const Interests = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="interests" className="interests" ref={sectionRef}>
      <div className="interests__content">
        <motion.div className="interests__header" style={{ y }}>
          <motion.div
            className="interests__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="interests__eyebrow-line" />
            <span className="interests__eyebrow-text">ACT VI</span>
            <span className="interests__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="interests__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interests & Music
          </motion.h2>
        </motion.div>

        <div className="interests__grid">
          {INTERESTS.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={interest.name}
                className="interests__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="interests__card-icon">
                  <Icon size={20} />
                </div>
                <h3 className="interests__card-name">{interest.name}</h3>
                <p className="interests__card-desc">{interest.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="interests__playlist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="interests__playlist-header">
            <FaHeadphones size={16} className="interests__playlist-icon" />
            <span className="interests__playlist-label">Lo que suena de fondo</span>
          </div>
          <div className="interests__playlist-list">
            {PLAYLIST.map((track, index) => (
              <motion.div
                key={track.title}
                className="interests__track"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                <span className="interests__track-num">{String(index + 1).padStart(2, '0')}</span>
                <div className="interests__track-info">
                  <span className="interests__track-title">{track.title}</span>
                  <span className="interests__track-artist">{track.artist}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Interests
