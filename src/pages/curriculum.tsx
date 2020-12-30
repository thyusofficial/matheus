import { motion } from 'framer-motion'
import React from 'react'
const Resume: React.FC = () => {
  return (
    <section className="flex flex-col items-center min-h-custom-size">
      <motion.h1 layoutId={'curriculum-title'} transition={{ duration: 1 }}>
        COMING SOON
      </motion.h1>
    </section>
  )
}

export default Resume
