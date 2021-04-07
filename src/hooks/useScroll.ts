import { useEffect } from "react"

export default (callback:(reached:boolean)=>void,scrollHeight = 200,target?:()=>HTMLElement)=>{
  useEffect(()=>{
    const element = target ? target() : window
    element.onscroll = ()=>{
      const toTop = target ? target().scrollTop : window.scrollY
      if(toTop >= scrollHeight){
        callback(true)
      }else{
        callback(false)
      }
    }
    return () => {
      element.onscroll = null
    }
  },[])
}