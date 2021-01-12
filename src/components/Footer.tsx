import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import {
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare
} from 'react-icons/fa'
import SocialAnchor from './SocialAnchor'
const Footer: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.footer
        className="flex flex-col items-center justify-center h-20 md:h-10"
        key="defaul-footer"
        initial={{ y: '100%' }}
        animate={{ y: '0' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex space-x-4 md:hidden">
          <SocialAnchor
            to="https://github.com/thyusofficial"
            icon={FaGithubSquare}
          />
          <SocialAnchor
            to="https://www.linkedin.com/in/thyus/"
            icon={FaLinkedin}
          />
          <SocialAnchor
            to="https://wa.me/5551994634296"
            icon={FaWhatsappSquare}
          />
          <SocialAnchor
            to="https://www.facebook.com/Thyusc/"
            icon={FaFacebookSquare}
          />
        </nav>
        <p className="text-secondary text-lg tracking-wide">
          Desenvolvido por
          <a
            className="text-primary hover:text-green transition-colors duration-200"
            href="https://www.linkedin.com/in/thyus/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Matheus
          </a>
        </p>
      </motion.footer>
    </AnimatePresence>
  )
}

export default Footer
