## vue3 的 UI 库

## 预览地址
[在线地址](https://qdleader.github.io/qdleader-ui)
:https://qdleader.github.io/qdleader-ui
## 安装

```
npm install qdleader-ui
```
## 在main.ts 中 引入样式
```
import { createApp } from 'vue'
import App from './App.vue'

import 'qdleader-ui/dist/lib/qdleader-ui.css'


createApp(App).mount('#app')
```

## 使用

```

<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "qdleader-ui"
</script>

```