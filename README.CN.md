# delay-loading 延迟加载

[English Doc](/README.md)

&emsp;&emsp;嗯……我想，在大多数情况下你的网速都是不稳定的，时快时慢。在操作应用的时候，你会想到给用户一个加载动画的反馈。但在网络速度较快的时候加载动画可能会一闪而过，这会导致你的应用程序突然白屏，但不设置加载效果的时候，如果网络情况较慢的时候，会使得用户觉得网站或者自己的网络出问题了。为了解决这个问题，于是有了它。

## 功能

- [x] 支持加载提示文本
- [x] 支持设置全屏展示
- [x] 支持Vue2
- [ ] 支持设置背景或是颜色
- [ ] 支持按钮内部加载
- [ ] 支持自定义传入加载动效

## 安装
```sh
npm i delay-loading --save-dev
```

### 全局指令
Vue 2
```js
import Vue from 'vue';
import { DelayLoading } from 'delay-loading'

Vue.use(DelayLoading)
```

Vue3
```js
import { createApp } from 'vue';
import App from  './App.vue';
import DelayLoading from 'delay-loading'

const app = createApp(App)

app.use(DelayLoading)
```

### 局部指令

```js

import { DelayLoading } from 'delay-loading' // vue2
import DelayLoading from 'delay-loading' // vue3

export default {
  directives: {
    DelayLoading
  }
}
```

## 使用
```html
<template>
  <div v-delay-loading="loading"></div>
</template>

<script>
export default {
  data(){
    return {
      loading: false
    }
  }
}
</script>
```

### 加载文本

你可以在设置了指令的元素上添加 `data-loading-text` 属性来展示你所想要展示的加载提示文本.
```html
<template>
  <div v-delay-loading="loading" data-loading-text="数据加载中...">

  </div>
</template>
```
