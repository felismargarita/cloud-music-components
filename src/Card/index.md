---
nav:
  title: Components
  path: /components
---

## Card

### 何时使用:
云音乐的元素比如歌单,歌曲,歌手,主播等等的展示主要以卡片形式,并在卡片的特殊位置展示一些附加元素,卡片组件可以支持这些场景

### 代码演示:

#### 单独使用
```tsx
import React from 'react';
import { Card } from 'cloud-music-components';

export default ()=>(
  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Card width={100} height={100}><div style={{background:'lightblue'}}>卡片1 尺寸100*100</div></Card>
    <Card><div style={{background:'lightgreen'}}>卡片2 默认尺寸150*150</div></Card>
    <Card width={300} height={200}><div style={{background:'pink'}}>卡片3 尺寸300*200</div></Card>
  </div>
)

```
#### 附加多个元素
在各个位置添加各个元素
```tsx
import React from 'react';
import { Card,Icon } from 'cloud-music-components';

export default ()=>(
  <Card
    lt={<Icon type="omit"/>}
    top={<Icon type="omit"/>}
    rt={<Icon type="omit"/>}
    lb={<Icon type="omit"/>}
    rb={<Icon type="omit"/>}
    center={<Icon type="omit"/>}
    left={<Icon type="omit"/>}
    right={<Icon type="omit"/>}
    bottom={<Icon type="omit"/>}
  >
  <div style={{background:'lightblue'}}/>
  </Card>
)

```

#### 一个实际的例子
添加一个播放按钮
```tsx
import React from 'react';
import { Card,Icon,Button } from 'cloud-music-components';

export default ()=>(
  <Card
  center={<Button><Icon type="play"/></Button>}
  isZoom={true}
  >
    <img src="http://felis.top:8101/picture?md5=0857a1547b2a94964d2274f38eb09235"/>
  </Card>
)

```


<API></API>

