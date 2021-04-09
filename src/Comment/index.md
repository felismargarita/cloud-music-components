---
nav:
  title: Components
  path: /components
---

## Comment

### 何时使用:
歌曲详情面的歌曲评论等其他需要评论的地方

### 代码演示:

#### 基本使用
以下评论摘自日剧《仁医》,有兴趣的小朋友可以去看看~
```tsx
import React from 'react';
import { Comment,Divider } from 'cloud-music-components';
import moment from 'moment'
const nickname1 = '夕染'
const content1 = '“好想变成雪啊，这样就可以落在先生肩上了...” “若是先生撑了伞呢？” “那就落在先生的红伞上，静载一路的月光。” “若是先生将雪拂去...” “那就任他拂去，能在他的手掌停留一刻，便足矣。” —— 村上纪香'
const nickname2 = '格里尼卡'
const content2 = '南方医生说：上帝只会给人挺过去的考验..'

export default ()=>(
  <>
    <Comment
      like={9999}
      postTime={moment()}
      nickname={nickname1}
      content={content1}
    />
    <Divider direction="horizontal"/>
    <Comment
      like={123}
      postTime={moment('2021-1-12 12:43:00')}
      nickname={nickname2}
      content={content2}
    />
  </>
)
```
#### 完整使用
包含头像和参考评论点赞等信息
```tsx
import React from 'react';
import { Comment,Divider } from 'cloud-music-components';
import moment from 'moment'
const nickname1 = '夕染'
const content1 = '“好想变成雪啊，这样就可以落在先生肩上了...” “若是先生撑了伞呢？” “那就落在先生的红伞上，静载一路的月光。” “若是先生将雪拂去...” “那就任他拂去，能在他的手掌停留一刻，便足矣。” —— 村上纪香'
const nickname2 = '格里尼卡'
const content2 = '南方医生说：上帝只会给人挺过去的考验..'

export default ()=>(
  <>
    <Comment
      like={9999}
      avatar={{src:'http://felis.top:8101/picture?md5=0857a1547b2a94964d2274f38eb09235',size:36}}
      postTime={moment()}
      nickname={nickname1}
      content={content1}
      liked={true}
    />
    <Divider direction="horizontal"/>
    <Comment
      like={123}
      avatar={{src:'http://felis.top:8101/picture?md5=0979d8420e51633818088d3b8b1f2a87',size:36}}
      postTime={moment('2021-1-12 12:43:00')}
      nickname={nickname2}
      content={content2}
      referComment={{
        content:'南方仁,你是喜欢甜豆腐脑还是咸豆腐脑',
        nickname:'豆腐脑战役'
      }}
    />
  </>
)
```
#### 自定义使用
组件支持一定程度上的自定义,可以根据需要是否启用这些功能
```tsx
import React from 'react';
import { Comment,Divider,Icon} from 'cloud-music-components';
import moment from 'moment'
const nickname1 = 'JANGXX'
const content1 = '这首歌可以说是此时此刻最应景的一首歌了 等这件事过去 你会见到你日思夜想的那个人的 一切都会好的'
const nickname2 = '最爱柴田淳'
const content2 = '在日推里面听到这首歌，后来看了仁医，最后填下了医学的高考志愿。'

export default ()=>(
  <>
    <div style={{marginBottom:'12px'}}>自定义时间格式化</div>
    <Comment
      like={13075}
      postTime={moment()}
      nickname={nickname1}
      content={content1}
      postTimeFomatter={(time)=>time.format('YYYY/MM/DD hh:mm:ss')+' 自定义时间'}
    />
    <Divider voidValue={24} direction="horizontal"/>
    <div style={{marginBottom:'12px'}}>自定义右下角功能栏</div>
    <Comment
      like={7600} //该属性不生效了,因为功能栏已被自定义了
      postTime={moment('2021-1-12 12:43:00')}
      nickname={nickname2}
      content={content2}
      footer={[
        <Icon type="love" style={{cursor:'pointer',color:'blue'}}/>,
        <Icon type="like" style={{transform:'rotate(180deg)',color:'blue',cursor:'pointer'}}/>,
      ]}
    />
  </>
)
```

<API></API>

