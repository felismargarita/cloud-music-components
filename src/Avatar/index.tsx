import React from 'react'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
import './style.scss'
export interface AvatarProps {
  /**
   * @description 图标url,base64
   */
  src:string
  /**
   * @description 图标大小
   * @default 50
   */
  size?:number,
  /**
   * @description 自定义className
   */
  className?:string,

  /**
   * @description 用户点击头像的回调
   */
  onClick?:()=>void
}

const Avatar:React.FC<AvatarProps> = ({src,size,className,onClick})=>{
  const classes = classnames(`${classNamePrefix}avatar`,className)
  return (
    <div className={classes} onClick={()=>onClick?.()} style={{height:size,width:size}}>
      <img style={{width:'100%',height:'100%'}} src={src}/>
    </div>
  )
}

Avatar.defaultProps = {
  size:50
}

export default Avatar