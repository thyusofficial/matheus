import React from 'react'
import Image from 'next/image'
import PageAnchor from '../components/PageAnchor'
import { FaUser, FaClipboardList, FaLaptopCode } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'

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

  const pageAnchor: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <section className="flex flex-col min-h-custom-mobile md:min-h-custom-tablet">
      <motion.div
        className="flex-1 flex items-center justify-between space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-4/5 flex flex-col space-y-5">
          <span className="bg-green w-12 h-0.5"></span>
          <h1 className="text-secondary font-bold tracking-wide text-5xl lg:text-7xl">
            Olá, meu nome é Matheus.
          </h1>
          <p className="tracking-wide text-2xl lg:text-3xl">
            Sou bacharel em Ciência da Computação, apaixonado por tecnologia e
            por desenvolvimento web & mobile.
          </p>
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
              className="flex place-content-center rounded-full absolute top-32 left-80"
              variants={tech}
            >
              <Image src="/img/techs/react.svg" width={40} height={40} />
            </motion.li>
            <motion.li
              className="flex place-content-center rounded-full absolute top-6 left-4"
              variants={tech}
            >
              <Image src="/img/techs/node.svg" width={55} height={62} />
            </motion.li>
            <motion.li
              className="flex place-content-center rounded-full absolute top-52 left-0"
              variants={tech}
            >
              <Image src="/img/techs/typescript.svg" width={45} height={45} />
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col justify-around sm:flex-row sm:justify-between sm:items-center"
        transition={{
          delay: 2
        }}
        variants={pageAnchor}
        initial="hidden"
        animate="visible"
      >
        <PageAnchor
          text="resumo"
          href="/resume"
          icon={FaUser}
          layoutId="resume-title"
        />
        <PageAnchor
          text="currículo"
          href="/curriculum"
          icon={FaClipboardList}
          layoutId={'curriculum-title'}
        />
        <PageAnchor
          text="skills"
          href="/resume"
          icon={FaLaptopCode}
          layoutId={'skills-title'}
        />
      </motion.div>
    </section>
  )
}

export default Home
