import React,{useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
export interface ToastProps {
  /**
   * @description toast内容
   */
  content:React.ReactNode
  /**
   * @description 持续时间
   * @default 1500ms
   */
  duaration?:number
  /**
   * @description 唯一键值,如果传入这个值在连续输入相同的uniqueKey调用时,渲染实例将会唯一,不会重复渲染多次
   */
  uniqueKey?:string
  destorySelf?:(leaveAction:()=>void)=>void
}

const transitionTime = 200 //动画时间 单位(毫秒)

const Toast:React.FC<ToastProps> = ({content,destorySelf})=>{
  const [className,setClassName] = useState(`${classNamePrefix}-toast`)
  useEffect(()=>{
    setClassName(classnames(`${classNamePrefix}-toast`,`${classNamePrefix}-toast-display`))
    destorySelf?.(()=>setClassName(`${classNamePrefix}-toast`))
  },
  [])

  return (
    <div className={`${classNamePrefix}-toast-container`}>
      <div className={className} style={{transition:`opacity ${transitionTime/1000}s`}}>{content}</div>
    </div>
  )
}

const nodeList:{
  key:string,
  div:HTMLDivElement
  timer:any
  destoryCb:()=>void
}[] = []

export const toast = (props:ToastProps)=>{
  const {content,duaration=1500,uniqueKey} = props
  const div = document.createElement('div')

  const destory = (cb:()=>void)=>{
    const leave = ()=>{
      const timer = setTimeout(()=>{
        cb()
        setTimeout(()=>{
          ReactDOM.unmountComponentAtNode(div)
          if(uniqueKey){
            const index = nodeList.findIndex(d=>d.key === uniqueKey)
            index > -1 && nodeList.splice(index,1)
          }
        },transitionTime)
      },duaration)
      return {timer,div}
    }
    if(uniqueKey){
      nodeList.push({key:uniqueKey,destoryCb:cb,...leave()})
    }else{
      leave()
    }
  }
  const renderNode = ()=>{
    document.body.appendChild(div)
    ReactDOM.render(<Toast content={content} destorySelf={destory}/>,div)
  }

  if(uniqueKey){
    const index = nodeList.findIndex(d=>d.key === uniqueKey)
    if(index>-1){
      const node  = nodeList[index]
      const {timer,destoryCb,div} = node
      clearTimeout(timer) //清理定时器
      node.timer = setTimeout(()=>{
        destoryCb()
        setTimeout(()=>{
          ReactDOM.unmountComponentAtNode(div)
          const index = nodeList.findIndex(d=>d.key === uniqueKey)
          index > -1 && nodeList.splice(index,1)
        },transitionTime)
      },duaration)
    }else{
      renderNode()
    }
  }else{
    renderNode()
  }

}
