import _ from 'lodash'
export default (value:any)=>{
  return _.isNull(value) || _.isUndefined(value) || _.isNumber(value) || _.isString(value) || _.isBoolean(value)
}