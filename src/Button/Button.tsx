import React from 'react'


interface ButtonProps {
  
}

const Button:React.FC<ButtonProps> = ({children})=> {


  return (
    <button>{children}</button>
  )
}

export default Button