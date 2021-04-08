---
nav:
  title: Components
  path: /components
---

## Darggable-bar
### 何时使用：
可以用在音乐播放进度条和音量条上
### 代码演示:

#### 基本使用

```tsx
import React from 'react';
import { DarggableBar } from 'cloud-music-components';

export default ()=>{
  const [value,setValue] = React.useState(0)
  return (
    <DarggableBar range={[0,1000]} value={value} onChange={v=>{
      setValue(v)
    }}/>
  )
}

```

#### 播放进度条
配合onDraggingChange做一个基本的播放进度条
```tsx
import React from 'react';
import { DarggableBar } from 'cloud-music-components';
import moment from 'moment'


const seconds = 240 //歌曲总秒数

export default ()=>{
  const [value,setValue] = React.useState(0)
  const [dragging,setDragging] = React.useState<{value:number,dragging:boolean}>({value:NaN,dragging:false})
  React.useEffect(()=>{
    const timer = setInterval(()=>{
      setValue(value=>value>=seconds ? 0 : value + 1)
    },1000)
    return ()=>clearInterval(timer)
  },[])


  return (
    <>
    <DarggableBar range={[0,seconds]} onDraggingChange={(v,dragging)=>setDragging({value:v,dragging})} value={value} onChange={v=>setValue(v)}/>
    {
      dragging.dragging
      ?
      moment(dragging.value*1000).format('mm:ss')
      :
      moment(value*1000).format('mm:ss')
    }
    </>
  )
}

```

### 注意点
由于拖拽时由于无法整除导致计算时会回调出浮点数,如何取整由调用方自由决定,本组件不做控制


<API></API>

