import React from 'react'
import Navbarjoin from './Navbarjoin'
import Ready from './Ready'
import Footer from './Footer'
const Join = ({handlejoinback}) => {
  return (
    <div className='join'>
        <Navbarjoin handlejoinback={handlejoinback} />
        <Ready />
        <Footer />
    </div>
  )
}

export default Join
