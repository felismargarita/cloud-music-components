import React from 'react'
import Icon from '../Icon/index'
import {classNamePrefix} from '@/const/index'

interface ToastIconProps {
  type:'info'|'success'|'warn'|'error'
}

const ToastIcon:React.FC<ToastIconProps> = ({type})=>{

  return (
    <div className={`${classNamePrefix}-toast-icon`}>
      <Icon type={type} style={{fontSize:13,color:'#000'}}/>
    </div>
  )
}

export default ToastIcon