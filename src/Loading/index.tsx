import React from 'react'
import Icon from '@/Icon/index'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
interface LoadingProps {
  /**
   * @description 用户自定义className
   */
  className?:string
  /**
   * @description 自定义style
   */
  style?:React.CSSProperties

  /**
   * @description 是否展示loading状态
   */
  loading?:boolean
  
}

const Loading:React.FC<LoadingProps> = ({className,style,children,loading})=>{

  const containerClasses = classnames(
    `${classNamePrefix}-loading`,
    className
    )
  const classesIcon = classnames(
    `${classNamePrefix}-loading-icon`,
    {
      [`${classNamePrefix}-loading-nested`]:children
    }
  )

  const conatinerClasses = classnames(
    `${classNamePrefix}-loading-container`,
    {
      [`${classNamePrefix}-loading-container-hidden`]:!loading
    }
  )

  return <div className={containerClasses} style={style}>
    {
      loading || !children
      ?
      <Icon className={classesIcon} type="loading"/>
      :
      null
    }
    <div className={conatinerClasses}>
      {children}
    </div>
  </div>
}

export default Loading