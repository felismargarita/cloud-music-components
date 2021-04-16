---
nav:
  title: Components
  path: /components
---

## Image

#### 基本使用
```tsx
import React from 'react';
import { Image } from 'cloud-music-components';
export default ()=>{
  return (
    <Image 
    height={175}
    width={300}
    src="https://felis.top:9000/picture?md5=a8acdb60f22df5e6fdd03e3cfaecdc65"/>
  )
}
```

#### 替换默认占位符
如果默认的占位符不满足你的需求,可以自由替换
```tsx
import React from 'react';
import { Image,Divider,Toast } from 'cloud-music-components';

export default ()=>{
  const height = 175
  const width = 300
  const fallBack = <div style={{height,width,background:'#ff7875'}}>加载失败~~~~~~</div>
  const placeholder = <div style={{height,width,background:'#d9f7be'}}>加载中~~~~~~</div>
  return (
    <div>
    <div>加载中</div>
    <Image 
      fallback={fallBack}
      placeholder={placeholder}
      height={height}
      width={width}
      src="https://felis.top:9000/picture?md5=a8acdb60f22df5e6fdd03e3cfaecdc65"/>
    <Divider direction="horizontal"/>
    <div>加载失败</div>
    <Image 
      fallBack={fallBack}
      placeholder={placeholder}
      height={height}
      width={width}
      onError={()=>Toast.error({content:'这里有张图片加载失败'})}
      src="https://felis.top:9000/picture?md5=noexists"/>
    </div>
  )
}
```


<API></API>

