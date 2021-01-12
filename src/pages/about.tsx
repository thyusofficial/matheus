import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import AboutCard from '../components/AboutCard'
import TechList from '../components/TechList'
import { techs } from '../utils/techList'
const About: React.FC = () => {
  const list: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const listItemTitle: Variants = {
    hidden: { x: -1280, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { stiffness: 100 }
    }
  }
  return (
    <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 min-h-custom-height">
      <motion.aside
        className="w-full md:w-1/2 lg:w-2/5 self-start py-4 bg-shape rounded flex flex-col text-secondary"
        layoutId="about-button-card"
        transition={{ duration: 0.5 }}
      >
        <div className="self-center w-44 h-44 rounded-full">
          <Image
            src="/img/matheus.svg"
            alt="Matheus Cardoso"
            width={156}
            height={156}
            className="rounded-full"
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

        <TechList techs={techs} />
      </motion.aside>
      <motion.ul
        className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-4"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.h1 className="text-4xl text-secondary" variants={listItemTitle}>
          Educação
        </motion.h1>
        <AboutCard
          title="bacharelado em Ciência da Computação"
          subtitle="uniRitter"
          period="Março 2015 &#8226; Setembro 2020"
          description="Curso com foco na análise de necessidades de usuários e com a atenção voltada ao desenvolvimento de softwares e aplicativos, gerenciamento de equipes e outras atividades de tecnologia."
        />
        <AboutCard
          title="bootcamp GoStack"
          subtitle="rocketseat"
          period="Outubro 2019 &#8226; Dezembro 2020"
          description="Treinamento online, prático e intensivo, no formato de bootcamp utilizando tecnologias NodeJS, ReactJS e React Native, e todo o ecossistema ao redor dessas ferramentas, do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e todas as bibliotecas e frameworks importantes."
        />
        <AboutCard
          title="curso de inglês"
          subtitle="espaço idiomas"
          period="Outubro 2019 &#8226; Dezembro 2020"
          description="Curso de língua inglesa."
        />

        <motion.h1 className="text-4xl text-secondary" variants={listItemTitle}>
          Profissional
        </motion.h1>
        <AboutCard
          title="desenvolvedor"
          subtitle="summit networks"
          period="Outubro 2020 &#8226; Atual"
          description="Desenvolvimento de software em Javascript/NodeJs para desktop e dispositivos móveis iOS e Android. Desenvolvimento frontend em React & React Native. Análise, identificação e correção de bugs e otimizações."
        />
        <AboutCard
          title="desenvolvedor"
          subtitle="bc serviços"
          period="julho 2019 &#8226; março 2020"
          description="Desenvolvimento full stack de software utilizando principalmente PHP, HTML, CSS e Javascript."
          intern
        />
        <AboutCard
          title="desenvolvedor"
          subtitle="anapps"
          period="abril 2019 &#8226; julho 2019"
          description="Auxílio na análise e desenvolvimento de sistemas internos, modelagem de banco de dados e correção de bugs."
          intern
        />
      </motion.ul>
    </section>
  )
}

export default About
