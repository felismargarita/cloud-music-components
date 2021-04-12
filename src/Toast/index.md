---
nav:
  title: Components
  path: /components
---

## Toast

#### 基本演示:

```tsx
import React from 'react';
import { Toast,Button } from 'cloud-music-components';

export default ()=>{
  const toastInfo = ()=>Toast.info({content:'info toast'})
  const toastWarn = ()=>Toast.warn({content:'warn toast'})
  const toastSuccess = ()=>Toast.success({content:'success toast'})
  const toastError = ()=>Toast.error({content:'error toast,4000ms后消失',duaration:4000})

  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Button onClick={toastInfo}>info</Button>
      <Button onClick={toastWarn}>warn</Button>
      <Button onClick={toastSuccess}>success</Button>
      <Button onClick={toastError}>error</Button>
    </div>
  )
}

```

#### 带复杂内容
可以用在一些可能存在操作抖动的场景,防止重复提示导致的toast闪屏问题
```tsx
import React from 'react';
import { Toast,Button } from 'cloud-music-components';

export default ()=>{
  const toastInfo = ()=>Toast.info({content:<div style={{color:'green'}}>复杂内容</div>,uniqueKey:12345678})
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Button onClick={toastInfo}>复杂内容</Button>
    </div>
  )
}

```

#### 带uniqueKey的使用
可以用在一些可能存在操作抖动的场景,防止重复提示导致的toast闪屏问题
```tsx
import React from 'react';
import { Toast,Button } from 'cloud-music-components';

export default ()=>{
  const toastInfo = ()=>Toast.info({content:'我是唯一的',uniqueKey:12345678})
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Button onClick={toastInfo}>唯一调用</Button>
    </div>
  )
}

```


<API></API>

