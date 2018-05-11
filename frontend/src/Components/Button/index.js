import React from 'react'
import './index.css'

const Button = (props) => {
  return (
    <div className='button'>
      {props.btnText}
    </div>
  )
}

export default Button