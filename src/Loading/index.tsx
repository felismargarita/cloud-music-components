import React from 'react'
import Icon from '@/Icon/index'
import {classNamePrefix} from '@/const/index'
import classnames from 'classnames'
interface LoadingProps {
  /**
   * @default 载入中
   * @description 加载文案
   */
  content?:string
  /**
   * @description 自定义className
   */
  className?:string
  /**
   * @description 自定义style
   */
  style?:React.CSSProperties
}

const Loading:React.FC<LoadingProps> = ({content,className,style})=>{


  const classes = classnames(`${classNamePrefix}-loading`,className)

  return (
    <span className={classes}>
      <Icon className={`${classNamePrefix}-loading-icon`} style={style} type="loading"/>
      <span>{content}</span>
    </span>
  )
}
Loading.defaultProps = {
  content:'载入中'
}

export default Loading