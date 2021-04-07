import React from 'react'
import Icon from '@/Icon/index'
import classnames from 'classnames'
import {classNamePrefix} from '@/const/index'
import './style.scss'
import useScroll from '@/hooks/useScroll'
interface BackTopProps {
  /**
   * @description 获取dom的函数
   * @default ()=>Window
   */
  target?:()=>HTMLElement
  /**
   * @description 受控属性,如果提供visible = true,可以控制控件是否显示,如果不提供则由容器的滚动状态来控制
   */
  visible?:boolean

  /**
   * @description 下滑感知高度,超过这个高度后会自动显示backtop组件
   * @default 200
   */
  visibleHeight?:number 
}

const BackTop:React.FC<BackTopProps> = ({target,visible:ctlVisible,visibleHeight})=>{
  const [visible,setVisible] = React.useState(ctlVisible)
  const classes = classnames(`${classNamePrefix}backtop`,{
    [`${classNamePrefix}backtop-hidden`]:!visible
  })

  useScroll((v)=>setVisible(v),visibleHeight,target)

  return (
    <div className={classes} onClick={()=>{
      if(target){
        target().scrollTop = 0
      }else {
        window.scrollTo({top:0})
      }
    }}>
      <Icon type="arrowUp" style={{fontSize:13,cursor:'pointer'}}/>
    </div>
  )
}
BackTop.defaultProps = {
  visible:false,
  visibleHeight:200
}
export default BackTop