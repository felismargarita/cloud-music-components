import React from 'react'
import {classNamePrefix} from '@/const/index'
import classnames from 'classnames'
import Loading from '@/Loading/index'
interface ButtonProps {
  /**
   * @description 点击后的回调
   */
  onClick?:()=>void
  /**
   * @description 按钮类型
   */
  type?:'primary'|'default'
  /**
   * @description 自定义className
   */
  className?:string
  /**
   * @description 自定义style
   */
  style?:React.CSSProperties

  /**
   * @description 是否启用幽灵模式
   * @default false
   */
   ghost?: boolean

   /**
    * @default false
    * @description 是否加载中
    */
   loading?:boolean
}

const Button:React.FC<ButtonProps> = ({children,className,style,ghost,onClick,type,loading})=> {

  const classes = classnames(`${classNamePrefix}-button`,className,{
    [`${classNamePrefix}-button-primary`]: type === 'primary',
    [`${classNamePrefix}-button-ghost`]: ghost,
    [`${classNamePrefix}-button-ghost-primary`]: ghost && type === 'primary',
    [`${classNamePrefix}-button-loading`]: loading,
  })


  return (
    <button onClick={()=>{
      if(loading){
        return
      }
      onClick?.()
    }} style={style} className={classes}>
      <span className={`${classNamePrefix}-button-content`}>
        {loading ? <Loading content=""/> : null}
        {children}
      </span>
    </button>
  )
}

export default Button