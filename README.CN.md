# delay-loading 延迟加载

[English Doc](/README.md)

&emsp;&emsp;嗯……我想，在大多数情况下你的网速都是不稳定的，时快时慢。在操作应用的时候，你会想到给用户一个加载动画的反馈。但在网络速度较快的时候加载动画可能会一闪而过，这会导致你的应用程序突然白屏，但不设置加载效果的时候，如果网络情况较慢的时候，会使得用户觉得网站或者自己的网络出问题了。为了解决这个问题，于是有了它。

## 功能

- [x] 支持加载提示文本
- [x] 支持设置全屏展示
- [x] 支持Vue2
- [x] 支持按钮内部加载
- [x] 支持自定义传入加载动效（HTML元素字符串，可以实现自定义css动画）
- [x] 支持设置背景或是颜色
- [ ] 支持设置全局配置（全局注册时）

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

### 延迟显示时间
设置一个时间来指定延迟多久展示，单位是毫秒，默认为：`300`.

```html
<template>
  <div v-delay-loading:300="loading"></div>
</template>
```

### 加载文本

你可以在设置了指令的元素上添加 `data-loading-text` 属性来展示你所想要展示的加载提示文本.

```html
<template>
  <div v-delay-loading="loading" data-loading-text="数据加载中..."></div>
</template>
```

### Fullscreen

使用 `.fullscreen` 参数来设置全屏加载效果

```html
<template>
  <div v-delay-loading.fullscreen="loading"></div>
</template>
```

### Inline

使用 `.inline` 参数来设置行内加载效果

```html
<template>
  <button v-delay-loading.inline="loading"></button>
</template>
```


### 加载效果

你可以设置 `data-loading-icon` 属性来自定义加载效果.

```html
<template>
  <div v-delay-loading="loading" :data-loading-icon="loadingIcon"></div>
</template>

<script>
export default {
  data(){
    return {
      loadingIcon: '<div class="boxLoading"></div>'
    }
  }
}
</script>

<style>
.boxLoading {  
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.boxLoading:before {
  content: '';
  width: 50px;
  height: 5px;
  background: #fff;
  opacity: 0.7;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
.boxLoading:after {
  content: '';
  width: 50px;
  height: 50px;
  background: #e04960;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
```
