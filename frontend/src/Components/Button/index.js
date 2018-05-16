import React from 'react'
import './index.css'

const Button = (props) => {
  return (
    <button className={ props.className } type={ props.type }>
      {props.btnText}
    </button>
  )
}

export default Button