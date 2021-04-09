import React from 'react'
import Avatar,{AvatarProps} from '../Avatar/index'
import {Moment} from 'moment'
import Divider from '../Divider'
import Icon from '../Icon'
import formatMoment from './formatMoment'
import {classNamePrefix} from '@/const/index'
import classnames from 'classnames'
interface CommentProps {
  /**
   * @description 用户昵称
   */
  nickname:string
  /**
   * @description 内容
   */
  content:string
  /**
   * @description avatar内容,属性参考avatar组件
   */
  avatar?:AvatarProps
  /**
   * @description 发布时间
   */
  postTime?:Moment
  /**
   * @description 参考评论
   */
  referComment?:CommentProps
  /**
   * @description 点赞数量
   */
  like?:number
  /**
   * @default false
   * @description 是否已点赞
   */
  liked?:boolean
  /**
   * @description 自定义页脚
   */
  footer?:React.ReactNode[]
  /**
   * @description 默认页脚点击评论按钮的回调
   */
  onClickComment?:()=>void
  /**
   * @description 默认页脚点赞的回调
   */
  onClickLike?:()=>void
  /**
   * @description 点击评论昵称的回调
   */
  onClickNickname?:()=>void
  /**
   * @description 点击参考评论昵称的回调
   */
  onClickReferNickname?:()=>void
  /**
   * @description 用户自定义的className
   */
  className?:string
  /**
  * @description 用户自定义style
  */
  style?:React.CSSProperties

  /**
   * @description 发布时间格式化器,用以替换默认的日期格式化函数
   */
  postTimeFomatter?:(time:Moment)=>string
}



const Comment:React.FC<CommentProps> = (
  { avatar,content,nickname,postTime,referComment,footer,like,liked,className,style,
    postTimeFomatter,onClickReferNickname,onClickNickname,onClickComment,onClickLike
  })=>{
  
  const timeFormatter = postTimeFomatter || formatMoment //决定使用自定的或者默认的时间格式化器

  const likeIconProps = {
    style:{
      fontSize:13,
      cursor:'inherit',
      color:liked ? '#EC4141' : 'inherit'
    }, 
    onClick:onClickLike
  }
  const likeIcon = liked ? <Icon type="likeFilled" {...likeIconProps}/> : <Icon type="like" {...likeIconProps}/>

  const classes = classnames(`${classNamePrefix}-comment`,className)
  return (
    <div style={style} className={classes}>
      {
        avatar
        ?
        <Avatar className={`${classNamePrefix}-comment-avatar`} {...avatar}/>
        :
        null
      }
      <div className={`${classNamePrefix}-comment-detail`}>
        <div className={`${classNamePrefix}-comment-content`}>
          <span className={`${classNamePrefix}-comment-nickname`} onClick={()=>onClickNickname?.()}>
            {nickname}:
          </span>
          {content}
        </div>
        {
          referComment
          ?
          <div className={`${classNamePrefix}-comment-refer`}>
            <div className={`${classNamePrefix}-comment-content`}>
              <span className={`${classNamePrefix}-comment-nickname`} onClick={()=>onClickReferNickname?.()}>
                @{referComment.nickname}:
              </span>
              {referComment.content}
            </div>
          </div>
          :
          null
        }
        <div className={`${classNamePrefix}-comment-footer`}>
          <div className={`${classNamePrefix}-comment-time`}>
            {
            postTime ? timeFormatter(postTime) : null
            }
          </div>
          <div className={`${classNamePrefix}-comment-btn`}>
            {
              footer
              ?
              footer.map((node,index)=>{
                return (
                  index < footer.length - 1
                  ?
                  <React.Fragment key={index}>
                    {node}
                    <Divider/>
                  </React.Fragment>
                  :
                  <React.Fragment key={index}>
                    {node}
                  </React.Fragment>
                )
              })
              :
              <>
                <span className={`${classNamePrefix}-comment-btn-item`}>
                  {likeIcon}
                  <span style={{marginLeft:'4px'}}>{like ? like : ''}</span>
                </span>
                <Divider voidValue={13}/>
                <span className={`${classNamePrefix}-comment-btn-item`}>
                  <Icon type="share" style={{fontSize:13,cursor:'inherit'}} />
                </span>
                <Divider voidValue={13}/>
                <span className={`${classNamePrefix}-comment-btn-item`}>
                  <Icon type="comment" style={{fontSize:13,cursor:'inherit'}}  onClick={onClickComment}/>
                </span>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment