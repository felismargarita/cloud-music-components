---
nav:
  title: Components
  path: /components
---

## Button

### 何时使用:
最基础的组件,页面多处存在各式各样的Button

### 代码演示:
#### 普通按钮
```tsx
import React from 'react';
import { Button } from 'cloud-music-components';

export default ()=><Button>按钮</Button>

```

#### 类型按钮
分为默认和主要按钮，对一些通用组件库而言，红色一般作为danger或者error用途，但对于网易云产品而言，红色是主色调，所以红色按钮反而是主按钮
```tsx
import React from 'react';
import { Button } from 'cloud-music-components';

export default ()=>{

  return (
    <div style={{width:'200px',display:'flex',justifyContent:'space-between'}}>
      <Button>默认</Button>
      <Button type="primary">主要</Button>
    </div>
  )
}

```

#### 幽灵按钮
适用于一些重背景的场景，为了不打断背景的连续性，建议使用幽灵按钮
```tsx
import React from 'react';
import { Button } from 'cloud-music-components';

export default ()=>{

  return (
    <div style={{width:'200px',display:'flex',justifyContent:'space-between'}}>
      <Button ghost>默认</Button>
      <Button ghost type="primary">主要</Button>
    </div>
  )
}

```

#### 加载中
当按钮处在加载中时会出现一个loading标志，此时再点击按钮不会触发回调
```tsx
import React from 'react';
import { Button } from 'cloud-music-components';

export default ()=>{

  return (
    <div style={{width:'400px',display:'flex',justifyContent:'space-between'}}>
      <Button loading ghost>加载按钮</Button>
      <Button loading>加载按钮</Button>
      <Button loading type="primary">加载按钮</Button>
    </div>
  )
}

```

<API></API>

