---
nav:
  title: Components
  path: /components
---

## Icon

代码演示:
```tsx
import React from 'react';
import { Icon } from 'cloud-music-components';

export default ()=><Icon type="music"/>

```


所有图标:

```tsx
import React from 'react';
import { Icon } from 'cloud-music-components';

export default () => {
  const types = [
    'music','download','cloud','fm','mark','stave','love','previous','next','play','pause','oneRound','random','allRound','turnList','start','volumeNormal','volumeSilent','playList','collection','delete','source','like','likeFilled','share','comment','arrowLeft','arrowRight','arrowUp','omit','loading','arrowTop','pencil','warn','info','success','close'
  ]
  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap',
    }}>
    {
      types.map(type=>(
        <div style={{width:'12.5%',textAlign:'center',margin:'12px'}}>
          <Icon style={{fontSize:32}} key={type} type={type}/>
          <div>{type}</div>
        </div>
      ))
    }
    </div>
  );
}
```

<API></API>

