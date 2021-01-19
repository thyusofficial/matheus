import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import database from '../config/firebase'
import Image from 'next/image'
import AboutCard from '../components/AboutCard'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'

const About: React.FC = () => {
  const [techs, setTechs] = useState([])
  const [professionalHistoric, setProfessionalHistoric] = useState([])
  const [educationHistoric, setEducationHistoric] = useState([])
  const [toggleMoreTechs, setToggleMoreTechs] = useState(false)

  const list: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const listTitle: Variants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { stiffness: 100 }
    }
  }

  const handleToggleTechs = useCallback(() => {
    setToggleMoreTechs(!toggleMoreTechs)
  }, [toggleMoreTechs])

  const techsFiltered = useMemo(
    () =>
      !toggleMoreTechs
        ? techs.filter(
            ({ id }) =>
              id === 'typescript' ||
              id === 'javascript' ||
              id === 'reactjs' ||
              id === 'nodejs'
          )
        : [...techs],
    [techs, toggleMoreTechs]
  )

  useEffect(() => {
    const response = database.ref('/techs')

    response.once('value', snapshot => {
      setTechs(snapshot.val())
    })
  }, [])

  useEffect(() => {
    const response = database.ref('/professional/')

    response.once('value', snapshot => {
      const professionalHistoricFormatted = snapshot.val().map(historic => ({
        ...historic,
        periodStart: format(parseISO(historic.period.start), 'MMMM yyyy', {
          locale: ptBR
        }),
        periodEnd:
          historic.period.end &&
          format(parseISO(historic.period.end), 'MMMM yyyy', {
            locale: ptBR
          })
      }))

      setProfessionalHistoric(professionalHistoricFormatted)
    })
  }, [])
  useEffect(() => {
    const response = database.ref('/education/')
    response.once('value', snapshot => {
      const educationlHistoricFormatted = snapshot.val().map(historic => ({
        ...historic,
        periodStart: format(parseISO(historic.period.start), 'MMMM yyyy', {
          locale: ptBR
        }),
        periodEnd:
          historic.period.end &&
          format(parseISO(historic.period.end), 'MMMM yyyy', {
            locale: ptBR
          })
      }))

      setEducationHistoric(educationlHistoricFormatted)
    })
  }, [])
  return (
    <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 min-h-custom-height">
      <motion.aside
        className="w-full md:w-1/2 lg:w-2/5 self-start py-4 bg-shape rounded flex flex-col text-secondary"
        layoutId="about-button-card"
        transition={{ duration: 0.5 }}
      >
        <div className="self-center w-44 h-44">
          <Image
            src="/img/matheus.svg"
            alt="Matheus Cardoso"
            width={156}
            height={156}
            className="rounded-full"
            quality={100}
          />
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-2xl font-bold">Matheus da Silva Cardoso</h1>
          <span>24 anos</span>
          <span>Porto Alegre, RS - Brasil</span>
          <span>matheus.silvacardoso10@gmail.com</span>
          <a
            className="bg-primary p-4 rounded font-bold hover:bg-primary-hover transition duration-200"
            href="/resume/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Baixar currículo
          </a>
        </div>
        <span className="w-full h-0.5 bg-background my-4" />
        <div className="flex flex-col items-center space-y-4">
          <span>Skills</span>
          <motion.ul
            className={`${
              !toggleMoreTechs
                ? 'flex space-x-2'
                : 'grid grid-cols-5 gap-2 md:grid-cols-6'
            }`}
            layout
            transition={{ duration: 0.5 }}
          >
            {techsFiltered.map(tech => (
              <li
                key={tech.id}
                className={`w-12 h-12 bg-cover transform transition-all duration-200 ${
                  !toggleMoreTechs
                    ? 'hover:-translate-y-2.5'
                    : 'hover:scale-110'
                } `}
                style={{ backgroundImage: `url(${tech.imgUrl})` }}
              />
            ))}
          </motion.ul>
          <button
            className="focus:outline-none"
            type="button"
            onClick={handleToggleTechs}
          >
            {!toggleMoreTechs ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
      </motion.aside>
      <motion.ul
        className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-4"
        initial="hidden"
        animate={
          educationHistoric.length > 0 &&
          professionalHistoric.length > 0 &&
          'visible'
        }
        variants={list}
      >
        <motion.h1 className="text-4xl text-secondary" variants={listTitle}>
          Educação
        </motion.h1>
        {educationHistoric.map(education => (
          <AboutCard
            key={education.id}
            title={education.title}
            subtitle={education.subtitle}
            periodStart={education.periodStart}
            periodEnd={education.periodEnd}
            description={education.description}
          />
        ))}
        <motion.h1 className="text-4xl text-secondary" variants={listTitle}>
          Profissional
        </motion.h1>
        {professionalHistoric.map(professional => (
          <AboutCard
            key={professional.id}
            title={professional.title}
            subtitle={professional.subtitle}
            periodStart={professional.periodStart}
            periodEnd={professional.periodEnd}
            description={professional.description}
          />
        ))}
      </motion.ul>
    </section>
  )
}

export default About
