import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

type TechsProps = {
  techs: string[]
}
const TechList: React.FC<TechsProps> = ({ techs }) => {
  const [techsFiltered, setTechsFiltered] = useState([])
  const [toggleMoreTechs, setToggleMoreTechs] = useState(false)

  const handleToggleTechs = useCallback(() => {
    setToggleMoreTechs(!toggleMoreTechs)
  }, [toggleMoreTechs])

  useEffect(() => {
    setTechsFiltered(
      toggleMoreTechs
        ? [...techs]
        : techs.filter(
          tech =>
            tech === 'javascript' ||
              tech === 'nodejs' ||
              tech === 'reactjs' ||
              tech === 'typescript'
        )
    )
  }, [techs, toggleMoreTechs])

  return (
    <div className="flex flex-col items-center space-y-4">
      <span>Skills</span>
      <motion.ul
        className={`${
          !toggleMoreTechs ? 'flex' : 'grid grid-cols-6 gap-2 md:grid-cols-5'
        }`}
        layout
        transition={{ duration: 0.5 }}
      >
        {techsFiltered.map(tech => (
          <li
            key={tech}
            className={`before:content after:content bg-tech-${tech} bg-cover w-12 h-12 transform ${
              !toggleMoreTechs ? 'hover:-translate-y-2.5' : 'hover:scale-110'
            } transition-all duration-200`}
          ></li>
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
  )
}

export default TechList
