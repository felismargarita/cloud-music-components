---
nav:
  title: Components
  path: /components
---

## Scroll-bar

### 何时使用:
云音乐默认样式条不是原生的,样式上需要做调整.

### 代码演示
需要修改默认的进度条,只要引入本组件的样式文件,自动启用,兼容webkit和firefox两种浏览器.
请看绿色区块右边的滑动条样式已被修改

``` tsx
import React from 'react'

export default ()=>{
  return (
    <div style={{height:'300px',overflowY:'auto'}}>
      <div style={{background:'green'}}>
      {
        new Array(100).fill(0).map((v,index)=><div style={{textAlign:'center',color:'#fff'}} key={index}>{index}</div>)
      }
      </div>
    </div>
  )
}

```