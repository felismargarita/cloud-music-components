import React,{cloneElement} from 'react'
import classnames from 'classnames'
import {CardProps,PlacementType} from './cardType'
import _isBaseType from '@/utils/_isBaseType'
import {classNamePrefix} from '../const/index'
const getNodeSytle = (node:React.ReactElement)=>{
  const style = node.props.style
  return style || {}
}
const placementStyles = {
  top:{ left:0,right:0,marginLeft:'auto',marginRight:'auto',top:0 },
  bottom:{ left:0,right:0,marginLeft:'auto',marginRight:'auto',bottom:0 },
  left:{ top:0,bottom:0,marginTop:'auto',marginBottom:'auto',left:0 },
  right:{ top:0,bottom:0,marginTop:'auto',marginBottom:'auto',right:0 },
  lt:{ left:0, top:0},
  lb:{ left:0, bottom:0},
  rt:{ right:0, top:0},
  rb:{ right:0, bottom:0},
  center:{ top:0, bottom:0, left:0 ,right:0, margin:'auto'}
}

const elementProcessor = (ele?:React.ReactNode,placement?:PlacementType)=>{
  if(!(ele && placement)){
    return null
  }
  const isBase = _isBaseType(ele)
  if(isBase){
    return (
      <div
      style={{
        position:'absolute',
        zIndex:100,
        ...placementStyles[placement]
      }}
      >{ele}</div>
    )
  }
  return  cloneElement(ele as React.ReactElement,{
      style:{
        position:'absolute',
        zIndex:100,
        ...getNodeSytle(ele as React.ReactElement),
        ...placementStyles[placement]
      }
    })
}

const Card:React.FC<CardProps> = (
  {
    lt,lb,rt,rb,top,bottom,right,left,center,
    isZoom,children,className,height,width,
    onHoverChange,onClick
  })=>{

  const isChildrenBase = _isBaseType(children)
  const body = (
    isChildrenBase
    ?
    <div style={{height:'100%',width:'100%'}}>{children}</div>
    :
    React.cloneElement(children as React.ReactElement,{
      style:{...getNodeSytle(children as React.ReactElement),height:'100%',width:'100%'}
    })
  )

  return (
  <div 
  onClick={()=>onClick?.()}
  style={{width,height}}
  className={classnames(`${classNamePrefix}-card`,className)} 
  onMouseEnter={()=>onHoverChange?.(true)}
  onMouseLeave={()=>onHoverChange?.(false)}>
    <div className={classnames(`${classNamePrefix}-card-body`,{
    [`${classNamePrefix}-card-zoom`]:isZoom
  })}>
      {elementProcessor(top,'top')}
      {elementProcessor(bottom,'bottom')}
      {elementProcessor(left,'left')}
      {elementProcessor(right,'right')}
      {elementProcessor(lt,'lt')}
      {elementProcessor(lb,'lb')}
      {elementProcessor(rt,'rt')}
      {elementProcessor(rb,'rb')}
      {elementProcessor(center,'center')}
      {body}
    </div>
  </div>)

}
Card.defaultProps = {
  height:150,
  width:150
}
export default Card