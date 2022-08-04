import PropTypes from 'prop-types'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Navbar } from '../Navbar'

export const Layout = ({ children }) => {
  return (
    <div className='page'>
      <Navbar />
      <Header />
      <div className='main'>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}
