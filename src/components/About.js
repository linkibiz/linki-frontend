import React from 'react'

const About = ({description}) => {
  return (
    <>
      <h2 className='font-bold'> Sobre mi </h2>
      <p>
       {description}
      </p>
    </>
  )
}

export default About