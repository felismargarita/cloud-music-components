---
nav:
  title: Components
  path: /components
---

## Loading

### 何时使用:
友好的展示loading状态,可以单独使用,也可以包裹其他元素

### 代码演示:

#### 单独使用
```tsx
import React from 'react';
import { Loading } from 'cloud-music-components';

export default ()=><Loading/>

```

#### 包裹元素
```tsx
import React from 'react';
import { Loading,Button } from 'cloud-music-components';

export default ()=>{
  const [visible,setVisible] = React.useState(false)
  return (
    <>
    <Loading loading={visible}><div style={{height:'100px',background:'blue'}}>这是一个容器</div></Loading>
    <Button onClick={()=>setVisible(!visible)}>{visible ? '关闭' : '打开'}</Button>
    </>
  )
}
```


<API></API>

