import { motion, Variants } from 'framer-motion'
import React from 'react'
interface AboutCardProps {
  title: string
  subtitle: string
  description: string
  periodStart: string
  periodEnd: string
}

const listItem: Variants = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { stiffness: 100 }
  }
}
const AboutCard: React.FC<AboutCardProps> = ({
  title,
  subtitle,
  description,
  periodStart,
  periodEnd
}) => {
  return (
    <motion.li
      className="flex flex-col space-y-4 bg-shape p-4 rounded tracking-wide"
      variants={listItem}
    >
      <strong className="text-2xl text-white">{title}</strong>
      <span className="text-white">{subtitle}</span>
      <time className="text-green capitalize">
        {periodStart} &#8226; {periodEnd || 'Atual'}
      </time>
      <p>{description}</p>
    </motion.li>
  )
}

export default AboutCard
