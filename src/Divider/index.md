---
nav:
  title: Components
  path: /components
---

## Divider
### 何时使用：
在内容需要做分区切割时使用
### 代码演示:
#### 纵向线：
```tsx
import React from 'react';
import { Divider } from 'cloud-music-components';

export default ()=>{

  return (
    <div>
      <span>内容1</span>
      <Divider/>
      <span>内容2</span>
      <Divider/>
      <span>内容3</span>
    </div>
  )
}

```

#### 横向线:
```tsx
import React from 'react';
import { Divider } from 'cloud-music-components';

export default ()=>{

  return (
    <div>
      <span>内容1</span>
      <Divider direction="horizontal"/>
      <span>内容2</span>
      <Divider direction="horizontal"/>
      <span>内容3</span>
    </div>
  )
}

```

<API></API>

