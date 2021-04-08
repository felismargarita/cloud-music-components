---
nav:
  title: Components
  path: /components
---

## Carousel

### 何时使用:
基本款走马灯,在发现页有多处用到了这个走马灯

### 代码演示:

#### 基本使用
```tsx
import React from 'react';
import { Carousel } from 'cloud-music-components';

const carouselCards = [
  { text:'独家',img:'http://felis.top:8101/picture?md5=9062dc80bb47556c3565efa18f1dcc32' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=5624a16a955d3f52088afe8b5eb5bb12' },
  { text:'新碟首发',img:'http://felis.top:8101//picture?md5=98cfacc930a291d70d72eb1b447fe2b0' },
  { text:'MV首发',img:'http://felis.top:8101//picture?md5=d6d853c35dd5d0fffec8a7509a13c070' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=2b97b3ec46feb33141d313e5379d8fd8' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=ae05e981386806b0dde1f848f7333937' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=cfc889c49b92312bcb26fe8fc7e1e896' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=6e9bdc761b49f6dc95bfda35b1981636' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=54298ef6444d6fa77584922e883ac5ca' }
 ]
export default ()=><Carousel cards={carouselCards}/>

```
#### 调整切换时间
切换时间设置成1000ms,快速切换
```tsx
import React from 'react';
import { Carousel } from 'cloud-music-components';

const carouselCards = [
  { text:'独家',img:'http://felis.top:8101/picture?md5=9062dc80bb47556c3565efa18f1dcc32' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=5624a16a955d3f52088afe8b5eb5bb12' },
  { text:'新碟首发',img:'http://felis.top:8101//picture?md5=98cfacc930a291d70d72eb1b447fe2b0' },
  { text:'MV首发',img:'http://felis.top:8101//picture?md5=d6d853c35dd5d0fffec8a7509a13c070' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=2b97b3ec46feb33141d313e5379d8fd8' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=ae05e981386806b0dde1f848f7333937' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=cfc889c49b92312bcb26fe8fc7e1e896' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=6e9bdc761b49f6dc95bfda35b1981636' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=54298ef6444d6fa77584922e883ac5ca' }
 ]
export default ()=><Carousel interval={1000} cards={carouselCards}/>

```

#### 是否开启自动切换
```tsx
import React from 'react';
import { Carousel,Button } from 'cloud-music-components';
const carouselCards = [
  { text:'独家',img:'http://felis.top:8101/picture?md5=9062dc80bb47556c3565efa18f1dcc32' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=5624a16a955d3f52088afe8b5eb5bb12' },
  { text:'新碟首发',img:'http://felis.top:8101//picture?md5=98cfacc930a291d70d72eb1b447fe2b0' },
  { text:'MV首发',img:'http://felis.top:8101//picture?md5=d6d853c35dd5d0fffec8a7509a13c070' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=2b97b3ec46feb33141d313e5379d8fd8' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=ae05e981386806b0dde1f848f7333937' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=cfc889c49b92312bcb26fe8fc7e1e896' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=6e9bdc761b49f6dc95bfda35b1981636' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=54298ef6444d6fa77584922e883ac5ca' }
 ]
export default ()=>{
  const [auto,setAuto] = React.useState(false)
  return (
    <>
    <Carousel interval={2000} autoPlay={auto} cards={carouselCards}/>
    <Button onClick={()=>setAuto(!auto)}>{auto ? '关闭' : '开启'}</Button>
    </>
  )
}

```

#### 去除非必要元素的简版
隐藏了手动切换按钮和下方的点阵
```tsx
import React from 'react';
import { Carousel,Button } from 'cloud-music-components';
const carouselCards = [
  { text:'独家',img:'http://felis.top:8101/picture?md5=9062dc80bb47556c3565efa18f1dcc32' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=5624a16a955d3f52088afe8b5eb5bb12' },
  { text:'新碟首发',img:'http://felis.top:8101//picture?md5=98cfacc930a291d70d72eb1b447fe2b0' },
  { text:'MV首发',img:'http://felis.top:8101//picture?md5=d6d853c35dd5d0fffec8a7509a13c070' },
  { text:'独家',img:'http://felis.top:8101//picture?md5=2b97b3ec46feb33141d313e5379d8fd8' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=ae05e981386806b0dde1f848f7333937' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=cfc889c49b92312bcb26fe8fc7e1e896' },
  { text:'新歌首发',img:'http://felis.top:8101/picture?md5=6e9bdc761b49f6dc95bfda35b1981636' },
  { text:'独家',img:'http://felis.top:8101/picture?md5=54298ef6444d6fa77584922e883ac5ca' }
 ]
export default ()=>{
  return (
    <>
    <Carousel dots={false} buttons={false} cards={carouselCards}/>
    </>
  )
}

```



<API></API>

