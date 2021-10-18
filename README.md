# delay-loading

[中文文档](/README.CN.md)

&ensp;&ensp;Well... I think in most cases your internet speed is unstable, fast and slow. When operating the app, you think of giving the user feedback on loading the animation. But loading the animation may flash when the network is fast, which makes your application suddenly white, but when the loading effect is not set, if the network is slow, it will make users feel that the website or their network is wrong. To solve the problem, it was available.

## Features

- [x] Support setting loading prompt text
- [x] Supports full-screen display loading
- [x] Support vue2
- [x] Support button internal loading
- [x] Supports custom loading effects(HTML string)
- [x] Support for setting colors
- [x] Supports setting global configuration(Global registration)

## Install

```sh
npm i delay-loading --save-dev
```

### Global directive

Vue 2
```js
import Vue from 'vue';
import { DelayLoading } from 'delay-loading'

Vue.use(DelayLoading, options)
```

Vue3
```js
import { createApp } from 'vue';
import App from  './App.vue';
import DelayLoading from 'delay-loading'

const app = createApp(App)

app.use(DelayLoading, options)
```

**options:**
- delay: Latency required for subsequent execution.
- color: Color of ICONS and text.
- background: Load the background of the mask (can be an image).
- zIndex: Popover mask layer by layer.

### Scope directive
```js
import { DelayLoading } from 'delay-loading' // vue2
import DelayLoading from 'delay-loading' // vue3

export default {
  directives: {
    DelayLoading
  }
}
```

## Usage
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

### Loading delay
Set a time to specify how long to delay the presentation. The unit is ms. The default value is `300` ms.

```html
<template>
  <div v-delay-loading:300="loading" data-loading-text="loading data..."></div>
</template>
```

### Loading text

Set the `data-loading-text` property to display the custom loading text.

```html
<template>
  <div v-delay-loading="loading" data-loading-text="loading data..."></div>
</template>
```

### Fullscreen

Use `.fullscreen` to set up full-screen loading.

```html
<template>
  <div v-delay-loading.fullscreen="loading"></div>
</template>
```

### Inline

Use `.inline` to set inline loading.

```html
<template>
  <button v-delay-loading.inline="loading"></button>
</template>
```

### Custom color

Use `data-loading-color` and `data-loading-background`.

```html
<template>
  <div v-delay-loading="loading" data-loading-color="#f00" data-loading-background="rgba(0,0,0,.68)"></div>
</template>
```

### Custom loading

You can customize the loading effect by setting the `data-loading-icon` property.

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
