export interface CardProps {
  /**
   * @description 顶部水平居中元素
   */
  top?:React.ReactNode
  /**
   * @description 底部水平居中元素
   */
  bottom?:React.ReactNode
  /**
   * @description 左侧垂直居中元素
   */
  left?:React.ReactNode
  /**
   * @description 右侧垂直居中元素
   */
  right?:React.ReactNode
  /**
   * @description 左上角元素
   */
  lt?:React.ReactNode
  /**
   * @description 左下角元素
   */
  lb?:React.ReactNode
  /**
   * @description 右上角元素
   */
  rt?:React.ReactNode
  /**
   * @description 右下角元素
   */
  rb?:React.ReactNode
  /**
   * @description 中心元素
   */
  center?:React.ReactNode
  /**
   * @description hover到卡片后的回调
   */
  onHoverChange?:(isHover:boolean)=>void
  /**
   * @default false
   * @description 是否启用hover后缩放功能
   */
  isZoom?:boolean
  /**
   * @description 点击卡片后的回调
   */
  onClick?:()=>void
  /**
   * @default 150
   * @description 卡片宽度
   */
  width?:number
  /**
   * @default 150
   * @description 卡片高度
   */
  height?:number
  /**
   * @description 自定义className
   */
  className?:string
  /**
   * @description 自定义样式
   */
  style?:React.CSSProperties
}

export type PlacementType = 'top'|'bottom'|'left'|'right'|'lt'|'lb'|'rt'|'rb'|'center'