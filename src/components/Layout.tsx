import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <main className="max-w-screen-xl min-h-screen mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
