import React from 'react'
import ToastIcon from './ToastIcon'
import {ToastProps,default as toast} from './Toast'
import {classNamePrefix} from '@/const/index'

const typeToast = (type:'info'|'success'|'warn'|'error')=>{
  return (props:ToastProps)=>{
    const {content,...rest} = props
    toast({
      content:(
        <div className=""><ToastIcon type={type}/>
          <div className={`${classNamePrefix}-toast-content`}>
            {content}
          </div>
        </div>
      ),
      ...rest
    })
}
}

export default {
  error:typeToast('error'),
  success:typeToast('success'),
  info:typeToast('info'),
  warn:typeToast('warn'),
  toast
}