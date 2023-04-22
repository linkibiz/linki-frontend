import React from 'react'

const Button = ({text, style}) => {

  const primary = "rounded-md border bg-black text-white p-3 w-full"
  const outlined = "rounded-md border border-black color-black p-3 w-full"
  return (
    <button className={ style === "primary" ? primary : outlined}>
      { text }
    </button>
  )
}

export default Button