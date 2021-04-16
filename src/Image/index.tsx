import React, { useState } from 'react'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
import Icon from '../Icon/index'

interface ImageProps {
  /**
   * @description 图片地址
   */
  src?:string
  /**
   * @description 加载失败的占位
   */
  fallBack?:React.ReactElement
    /**
   * @description 加载中的占位
   */
  placeholder?:React.ReactElement
  /**
   * @description 加载失败后的回调
   */
  onError?:()=>void
  /**
   * @description 加载成功后的回调
   */
  onLoad?:()=>void
  /**
   *@description  图片宽度
   */
  width?:number
  /**
   * @description 图片高度
   */
  height?:number
  /**
   * @description 点击图片的回调
   */
  onClick?:()=>void
  /**
   * @description 自定义的className
   */
  className?:string
  /**
   * @description 自定义的style
   */
  style?:React.CSSProperties
}

const Image:React.FC<ImageProps> = ({className,fallBack,placeholder,height,width,style,src,onClick,onError,onLoad})=>{
  const [success,setSuccess] = useState(true)
  const [loading,setLoading] = useState(true)

  const iconStyle = width 
  ? 
  {
    color:'#8c8c8c',
    fontSize:width*0.1
  }
  :
  {
    color:'#8c8c8c',
  }

  if(!success){
    if(fallBack){
      return fallBack
    }
    return (
      <div className={`${classNamePrefix}-default-placeholder`} style={{height,width}}>
        <Icon type="image" style={iconStyle}/>
      </div>
    )
  }

  const imgClasses = classnames(
    className,
    {
      [`${classNamePrefix}-img-hidden`]:loading
    }
  )

  const holder = placeholder ||  (
    <div className={`${classNamePrefix}-default-placeholder`} style={{height,width}}>
      <Icon type="music" style={iconStyle}/>
    </div>
  )

  return (
    <div onClick={()=>onClick?.()}>
      {
        loading
        ?
        holder
        :
        null
      }
      <img 
        onError={()=>{
          setSuccess(false)
          setLoading(false)
          onError?.()
        }} 
        onLoad={()=>{
          setLoading(false)
          onLoad?.()
        }}
        style={{...style,width,height,display: loading ? 'none' : 'block'}} 
        className={imgClasses} 
        src={src}/>
    </div>
  )
}
export default Image