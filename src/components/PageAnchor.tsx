import React from 'react'
import Link from 'next/link'
import { IconBaseProps } from 'react-icons'
import { motion } from 'framer-motion'

interface PageAnchorProps {
  text: string
  href: string
  icon: React.ComponentType<IconBaseProps>
  layoutId: string
}

const PageAnchor: React.FC<PageAnchorProps> = ({
  text,
  href,
  icon: Icon,
  layoutId
}) => {
  return (
    <Link href={href}>
      <motion.div className="cursor-pointer flex items-center justify-center py-4 px-5 space-x-2 text-xl lg:text-2xl uppercase text-white font-bold bg-primary rounded hover:bg-primary-hover">
        <Icon size={22} />
        <motion.span layoutId={layoutId}>{text}</motion.span>
      </motion.div>
    </Link>
  )
}
export default PageAnchor
