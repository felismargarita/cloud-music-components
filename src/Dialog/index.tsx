import React from 'react'
import classnames from 'classnames'
import RCDialog from 'rc-dialog'
import 'rc-dialog/assets/index.css'
import Icon from '../Icon/index'
import {classNamePrefix} from '@/const/index'

interface DialogProps {
  /**
   * @default false
   * @description 弹框可见性
   */
  visible?:boolean
  /**
   * @description 点击模态框关闭时的回调
   */
  onCancel?:()=>void
  /**
   * @description 标题属性
   */
  title?:React.ReactNode
  /**
   * @description 模态框渲染函数
   */
  modalRender?:(node:React.ReactNode)=>React.ReactNode|undefined
  /**
   * @description 自定义className
   */
  className?:string
  /**
   * @description 内容的style
   */
  bodyStyle?:React.CSSProperties

  /**
   * @default false
   * @description 是否显示遮罩层
   */
  mask?:boolean
  /**
   * @default true
   * @description 支持点击遮罩层关闭
   */
  maskClosable?:boolean

    /**
   * @default 472
   * @description 宽度
   */
  width?:number

  /**
   * @default 1000
   * @description 设置dialog的z-index 
   */

  zIndex?:number
}

const Dialog:React.FC<DialogProps> = ({visible,children,onCancel,zIndex,width,title,className,modalRender,bodyStyle,mask,maskClosable})=>{
  const classes = classnames(`${classNamePrefix}-dialog`,className)
  return (
    <RCDialog 
    zIndex={zIndex}
    visible={visible} 
    onClose={()=>{
      if(maskClosable){
        onCancel?.()
      }
    }}
    className={classes}
    modalRender={modalRender}
    bodyStyle={bodyStyle}
    title={title}
    wrapClassName={`${classNamePrefix}-dialog-wrapper`}
    keyboard={false}
    width={width}
    closeIcon={
    <div style={{fontSize:16}}>
      <Icon 
      onClick={()=>{
        onCancel?.()
      }} 
      type="close" 
      style={{cursor:'pointer'}}/>
    </div>}
    maskStyle={mask? {}:{background:'none'}}>
      {children}
    </RCDialog>
  )
}

Dialog.defaultProps={
  maskClosable:true,
  width:472,
  zIndex:1000
}

export default Dialog