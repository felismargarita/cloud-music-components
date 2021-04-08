import React from 'react'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
interface ItemProps {
  className?:string
  pageNumber?:number
  onClick?:()=>void
}

const Item:React.FC<ItemProps> = ({children,className,pageNumber,onClick})=>{
  const classes = classnames(`${classNamePrefix}-pagination-item`,className)
  return (
    <div className={classes} onClick={()=>{
      onClick?.()
    }}>{children}</div>
  )
}
export default Item