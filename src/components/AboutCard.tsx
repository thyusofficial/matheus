import { motion, Variants } from 'framer-motion'
import React from 'react'
interface AboutCardProps {
  title: string
  subtitle: string
  period: string
  intern?: boolean
  description?: string
}

const listItem: Variants = {
  hidden: { x: -1280, opacity: 0 },
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
  period,
  intern
}) => {
  return (
    <motion.li
      className="flex flex-col space-y-4 bg-shape p-4 rounded tracking-wide"
      variants={listItem}
    >
      <strong className="text-2xl text-white capitalize">{title}</strong>
      <span className="text-white capitalize">
        {subtitle} {intern && '- estágio'}
      </span>
      <time className="text-green capitalize" dateTime="2020-10">
        {period}
      </time>
      <p>{description}</p>
    </motion.li>
  )
}

export default AboutCard
