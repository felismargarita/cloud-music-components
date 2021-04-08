import React from 'react'
import Icon from '@/Icon/index'
import Item from './Item'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'

interface PaginationProps {
  /**
   * @description 总条数
   */
  total:number
  /**
   * @description 当前页码
   */
  current:number
  /**
   * @default 10
   * @description 每页数量
   */
  pageSize?:number
  /**
   * @description 页码切换时的回调
   */
  onChange?:(current:number,size:number)=>void
  /**
   * @description 自定义className
   */
  className?:string
  /**
   * @description 自定义style
   */
  style?:React.CSSProperties
}

const Pagination:React.FC<PaginationProps> = ({total,current,pageSize = 10,onChange,className,style})=>{  
  let paginations:Array<number> = []

  const totalPage = Math.ceil(total/pageSize)
  if(totalPage<=10){
    paginations = new Array(totalPage).fill(0).map((key,index)=>index + 1)
  }else{
    //当总页数大于10时,需要计算被选中的页面是否需要 左省略和右省略 0代表省略号
    let omitLeft = current>=6
    let omitRight = totalPage - current >=6
    const toolArray = [1,2,3,4,5,6,7,8]
    if(!omitLeft && omitRight){
      paginations = [...toolArray,0,totalPage]
    }
    if(omitLeft && !omitRight){
      paginations = [1,0,...toolArray.reverse().map(v=>totalPage-v+1)]
    }
    if(omitLeft && omitRight){
      paginations = [1,0,current-3,current-2,current-1,current,current+1,current+2,current+3,0,totalPage]
    }
  }

  

  const render = (
    <>
    {paginations.map((pageNumber,index)=>{
      if(pageNumber){
        return (
          <Item 
            onClick={()=>{
              if(pageNumber === current){
                return
              }
              onChange?.(pageNumber,pageSize)
            }}
            className={pageNumber === current ? `${classNamePrefix}-pagination-item-selected` :''} 
            key={index}>{pageNumber}</Item>
        )
      }else{
        return (
          <Item 
            className={`${classNamePrefix}-pagination-item-omit`}
            key={index}><Icon type="omit"/></Item>
        )
      }
    })}
    </>
  )
  const classes = classnames(`${classNamePrefix}-pagination`,className)
  return (
    <div className={classes} style={style}>
      <Item 
      className={current === 1 ? `${classNamePrefix}-pagination-item-disabled`:''} 
      onClick={()=>{
        if(current>1){
          onChange?.(current-1,pageSize)
        }
      }}>
        <Icon type="arrowLeft" style={{fontSize:12}}/>
      </Item>
      {render}
      <Item 
      className={current === totalPage ? `${classNamePrefix}-pagination-item-disabled`:''}
      onClick={()=>{
        if(current < totalPage){
          onChange?.(current+1,pageSize)
        }
      }}>
        <Icon type="arrowRight" style={{fontSize:12}}/>
      </Item>
    </div>
  )
}
export default Pagination