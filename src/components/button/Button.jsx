import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ bgColor, rounded, text, padding, fontSize, color, margin, button, activeButton, setActiveButton, id }) => {
  const c = 'dfd'.includes
  return (
    <>
      {!button ? (
        <NavLink to='/signup' className={`block w-fit ${margin}
      ${rounded} ${bgColor} ${padding} ${fontSize} ${color} font-medium`}>
          {text}
        </NavLink>
      ) : (
        <button className={`button font-medium block w-fit ${activeButton === id ? 'bg-green-60 text-grey-11' : 'text-white'} ${margin}
          ${rounded} ${padding} ${fontSize} font-medium`} 
          onClick={() => setActiveButton(id) }>
          {text}
        </button>
      )}
    </>
  )
}

export default Button