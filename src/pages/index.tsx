import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const Home: React.FC = () => {
  const tech: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  }

  return (
    <section className="flex flex-col min-h-custom-height">
      <motion.div
        className="flex flex-1 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex md:w-4/5 lg:w-1/2 flex-col space-y-10">
          <motion.span
            className="bg-green h-0.5"
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ duration: 1 }}
          ></motion.span>
          <h1 className="text-secondary font-bold tracking-wide text-5xl lg:text-7xl">
            Olá, meu nome é Matheus.
          </h1>
          <p className="tracking-wide text-2xl lg:text-3xl">
            Sou bacharel em Ciência da Computação, apaixonado por tecnologia e
            por desenvolvimento web & mobile.
          </p>

          <Link href="/about">
            <motion.a
              className="md:self-start cursor-pointer flex place-content-center bg-primary rounded py-4 px-8 text-white font-bold uppercase hover:bg-primary-hover"
              layoutId="about-button-card"
            >
              Mais detalhes
            </motion.a>
          </Link>
        </div>
        <div className="hidden md:block relative">
          <Image
            src="/img/me.svg"
            alt="Matheus Cardoso"
            width={600}
            height={478}
          />
          <motion.ul
            className="absolute w-full h-full inset-0"
            variants={tech}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              className="absolute top-3/4 left-3/4 rounded-full w-28 h-28 bg-tech-nodejs bg-no-repeat bg-contain bg-cover"
              variants={tech}
            ></motion.li>
            <motion.li
              className="absolute top-1/4 left-3/4 rounded-full w-20 h-20 bg-tech-reactjs bg-no-repeat bg-cover"
              variants={tech}
            ></motion.li>
            <motion.li
              className="absolute top-1/2 rounded-full w-28 h-28 bg-tech-typescript bg-no-repeat bg-cover"
              variants={tech}
            ></motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
