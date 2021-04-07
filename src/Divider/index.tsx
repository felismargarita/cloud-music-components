import React from 'react'
import classnames from 'classnames'
interface DividerProps {
  /**
   * @default 12
   * @description 间隔控件
   */
  voidValue?:number
  
  /**
 * @default 12
 * @description 分割线高度度
  */
  height?:number

  /**
   * @default
   * @description 分割线宽度
   */
  width?:number
  /**
   * @default vertical
   * @description 分割线方向
   */
  direction?:'horizontal'|'vertical'
    /**
   * @description 自定义className
   */
  className?:string
    /**
   * @description 自定义style
   */
  style?:React.CSSProperties
}

const Divider:React.FC<DividerProps> = ({className,style,voidValue,height,width,direction})=>{

  const classes = classnames(className,{
    'cloud-music-divider':direction === 'vertical',
    'cloud-music-divider-horizontal':direction ==='horizontal'
  })

  const innerStyle:React.CSSProperties = (
    direction === 'vertical'
    ?
    {
      marginLeft:voidValue,marginRight:voidValue,height
    }
    :
    {
      marginTop:voidValue,marginBottom:voidValue,width,height:'3px',transform:'scale(1,0.1)'
    }
  )

  return (
  <div className={classes} style={{...innerStyle,...style}}>
  </div>
  )
}
Divider.defaultProps = {
  voidValue:12,
  height:12,
  direction:'vertical'
}
export default Divider