import React from 'react'
import Icon from '../Icon/index'
interface HeaderProps {
  content:string
  onClick?:()=>void
  icon?:React.ReactNode
}

const Header:React.FC<HeaderProps> = ({content,onClick,icon})=>{

  let pageIcon = icon || <Icon type="arrowRight"/>

  return (
    <div 
    className="cloud-music-page-header"
    onClick={()=>onClick?.()} 
    >
      {content}{<span className="cloud-music-page-header-icon">{pageIcon}</span>}
    </div>
  )
}

export default Header