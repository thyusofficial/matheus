import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare
} from 'react-icons/fa'
import SocialAnchor from './SocialAnchor'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <motion.header
      className="flex justify-between items-center py-2"
      initial={{ y: '-100%' }}
      animate={{ y: '0' }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <a className="mx-auto md:mx-0">
          <Image src="/img/logo.svg" width="302" height="30" alt="Logo" />
        </a>
      </Link>

      <nav className="hidden space-x-4 md:flex">
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
    </motion.header>
  )
}
export default Header
