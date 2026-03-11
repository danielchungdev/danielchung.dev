'use client'

import { motion, type Variants } from 'framer-motion'
import Jobs from '../../public/json/jobs.json'
import ProjectList from '../../public/json/projects.json'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const section: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
}

const cardContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function AnimatedContent() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">

      {/* Bio */}
      <motion.div variants={section} className="mb-16">
        <p className="leading-relaxed mb-4">
          Building ai tools @{' '}
          <a href="https://www.modop.com/" target="_blank" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">
            Mod Op
          </a>
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/danielchungdev" target="_blank" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">github</a>
          <a href="https://www.linkedin.com/in/danielchungdev" target="_blank" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">linkedin</a>
          <a href="mailto:daniel@danielchung.dev" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">email</a>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.section variants={section} className="mb-16">
        <h2 className="text-xs tracking-widest font-bold mb-8">~ EXPERIENCE</h2>
        <motion.div className="space-y-8" variants={cardContainer}>
          {Jobs.map((job, i) => (
            <motion.div key={i} variants={card} className="border-l-2 border-neutral-400 dark:border-neutral-600 pl-4">
              <p className="font-bold">{job.position}</p>
              <p>
                <a href={job.website} target="_blank" className="text-blue-600 dark:text-blue-400">
                  {job.company}
                </a>
                {' '}/ {job.years}
              </p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">{job.responsabilities[0]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects */}
      <motion.section variants={section}>
        <h2 className="text-xs tracking-widest font-bold mb-8">~ PROJECTS</h2>
        <div className="space-y-4">
          {ProjectList.filter(p => p.name.startsWith("Word Association")).map((project, i) => (
            <motion.a
              key={i}
              href={project.website}
              target="_blank"
              className="block border border-neutral-300 dark:border-neutral-700 rounded p-4 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-150"
              whileHover={{ y: -3, boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-bold">{project.name}</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-3">
                {project.tools.map((tool, j) => (
                  <span key={j} className="border border-neutral-400 dark:border-neutral-600 rounded px-2 py-0.5 text-xs">{tool}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

    </motion.div>
  )
}
