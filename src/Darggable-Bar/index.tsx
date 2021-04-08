import React,{useState} from 'react'
import classnames from 'classnames'
import useDom from '@/hooks/useDom'
import Draggable, { DraggableEvent }  from 'react-draggable'
import _ from 'lodash'
import {classNamePrefix} from '@/const/index'
interface DraggableBarProps {
    /**
     * @description 当前值,受控属性
     */
    value:number
    /** 
     * @default [0,100]
     * @description 数值范围
     */
    range?:[number,number]
    /**
     * @description 拖拽结束时的回调
     */
    onChange?:(value:number)=>void
    /**
     * @description 拖拽中的实时回调
     */
    onDraggingChange?:(value:number,isDragging:boolean)=>void
    /**
     * @description 用户自定义的className
     */
    className?:string
    /**
     * @description 用户自定义style
     */
    style?:React.CSSProperties
}

const defatultRange:[number,number] = [0,100]

const getRange = (range:[number,number] = defatultRange)=>{
    const value = range[1] - range[0]
    if(value<=0){
        console.warn('DraggableBar range校验错误:范围必须大于0,请输入正确的数值范围')
        return 100
    }
    return value
}

const getValue = (value:number,range:[number,number] = defatultRange)=>{
    const [min,max] = range
    if(value<min){
        return min
    }
    if(value>max){
        return max
    }
    return value
}


const DraggableBar:React.FC<DraggableBarProps> = ({className,value,range,onChange,onDraggingChange,style})=>{
    const [barDom,barRef] = useDom<HTMLDivElement>()
    const [isHover,setHover] = useState(false)
    const width = barDom?.clientWidth || 0 //滑轨的宽度
    const left = barDom?.getBoundingClientRect().left || 0 //滑轨最左端距离视口最左端的距离
    const total = getRange(range)
    const [isDragging,setDragging] = useState(false)
    const classes = classnames(`${classNamePrefix}-draggable-bar`,className)

    const [tmpX,setTmpX] = useState<number>(NaN) //拖拽时的临时值
    const xAxis = isDragging ? tmpX : (getValue(value,range)/total)*width

    const onDarg = (e:DraggableEvent)=>{
        setDragging(true)
        const {x} = e as MouseEvent 
        const right = left + width 
        if(x<=left){
            setTmpX(0)
        }else if(x>=right){
            setTmpX(width)
        }else {
            setTmpX(x - left)
        }
        
        const draggingValue = total*((x - left)/width)
        onDraggingChange?.(draggingValue,true)
    }

    const onStop = ()=>{
        const finalValue = tmpX*total/width
        setDragging(false)
        onChange?.(finalValue)
        onDraggingChange?.(finalValue,false)
    }

    const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{
        const {clientX} = e
        const x = clientX-left
        const clickValue = x*total/width
        onChange?.(clickValue)
    }

    const dot = isHover || isDragging
                ?
                <Draggable 
                axis="x" 
                bounds={{top:0,bottom:0,left:0,right:width}}
                position={{x:xAxis,y:0}}
                onDrag={onDarg}
                onStop={onStop}
                >
                    <div className={`${classNamePrefix}-draggable-bar-dot`}></div>
                </Draggable>
                :
                <div></div>

    return (
        <div 
            ref={barRef}
            style={style}
            className={classes}
            onClick={onClick}
            onMouseLeave={()=>setHover(false)} 
            onMouseEnter={()=>setHover(true)}>
            <div className={`${classNamePrefix}-draggable-bar-over`} style={{width:xAxis}}></div>
          {dot}
        </div>
    )
}

DraggableBar.defaultProps = {
    range:defatultRange

}
export default DraggableBar