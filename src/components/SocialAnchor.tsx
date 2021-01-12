import React from 'react'

import { IconBaseProps } from 'react-icons'
import { motion } from 'framer-motion'

interface InputProps {
  to: string
  icon: React.ComponentType<IconBaseProps>
}
const SocialAnchor: React.FC<InputProps> = ({ to, icon: Icon }) => {
  return (
    <motion.a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center rounded h-10 w-10 bg-shape text-primary hover:text-primary-hover hover:bg-shape-hover"
      whileHover={{ translateY: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Icon size={30} />
    </motion.a>
  )
}

export default SocialAnchor
