---
nav:
  title: Components
  path: /components
---

## Dialog
### 何时使用：
一个经典的模态框,可以用在弹框发起评论的场景
### 代码演示:
#### 简单使用：
```tsx
import React from 'react';
import { Dialog,Button } from 'cloud-music-components';

export default ()=>{
  const [visible,setVisible] = React.useState(false)
  return (
    <div>
      <Dialog 
        onCancel={()=>setVisible(false)}
        title="模态框" 
        visible={visible}>
        这是一个模态框
      </Dialog>
      <Button onClick={()=>setVisible(true)}>打开</Button>
    </div>
  )
}

```

#### 拖拽模态框：
配合react-draggable可以支持模态框的拖动
```tsx
import React from 'react';
import { Dialog,Button } from 'cloud-music-components';
import Draggable  from 'react-draggable';

export default ()=>{
  const [visible,setVisible] = React.useState(false)
  const [dragableDiabled,setDragbleDiabled] = React.useState(true)
  return (
    <div>
      <Dialog 
        mask={true}
        modalRender={modal => <Draggable disabled={dragableDiabled}>{modal}</Draggable>}
        onCancel={()=>setVisible(false)}
        title={<div
        style={{cursor:dragableDiabled ? 'default' : 'move'}}      
        onMouseOver={() => {
          if (dragableDiabled){
            setDragbleDiabled(false)
          }
        }}
        onMouseOut={() => {
          setDragbleDiabled(true)
        }}>可拖拽的模态框</div>} 
        visible={visible}>
        <div>鼠标放在标题处可以拖动哦~~~~~</div>
        <div>可以拖动哦~~~~~</div>
        <div>可以拖动哦~~~~~</div>
        <div>可以拖动哦~~~~~</div>
      </Dialog>
      <Button onClick={()=>setVisible(true)}>打开</Button>
    </div>
  )
}

```


<API></API>

