import React from 'react'
import Icon from '../Icon/index'
import {classNamePrefix} from '@/const/index'
interface HeaderProps {
  content:string
  onClick?:()=>void
  icon?:React.ReactNode
}

const Header:React.FC<HeaderProps> = ({content,onClick,icon})=>{

  let pageIcon = icon || <Icon type="arrowRight"/>

  return (
    <div 
    className={`${classNamePrefix}-page-header`}
    onClick={()=>onClick?.()} 
    >
      {content}{<span className={`${classNamePrefix}-page-header-icon`}>{pageIcon}</span>}
    </div>
  )
}

export default Header