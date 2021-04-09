import moment,{ Moment } from "moment";
moment.locale('zh-cn')
export default (myMoment:Moment)=>{
  //<7天
  const diff = moment().diff(myMoment,'days')
  if(diff<=7){
    return myMoment.fromNow()
  }
  //是否是今年
  if(moment().format('YYYY') === myMoment.format('YYYY')){
    return myMoment.format('M月D日 hh:mm')
  }
  
  return myMoment.format('YYYY年M月D日 hh:mm')
}