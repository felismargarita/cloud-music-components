---
nav:
  title: Components
  path: /components
---

## Pagination

### 何时使用
在歌曲详情页面最新评论需要分页处理,使用这一个最基本的分页组件

代码演示:
```tsx
import React from 'react';
import { Pagination } from 'cloud-music-components';

export default ()=>{
  const [current,setCurrent] = React.useState(1)

  return <Pagination current={current} onChange={(c,s)=>setCurrent(c)} total={999} pageSize={10}/>
}

```


<API></API>

