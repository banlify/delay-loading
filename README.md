# delay-loading

[中文文档](/README.CN.md)

&ensp;&ensp;Well... I think in most cases your internet speed is unstable, fast and slow. When operating the app, you think of giving the user feedback on loading the animation. But loading the animation may flash when the network is fast, which makes your application suddenly white, but when the loading effect is not set, if the network is slow, it will make users feel that the website or their network is wrong. To solve the problem, it was available.

## Features

- [x] Support setting loading prompt text
- [x] Supports full-screen display loading
- [x] Support vue2
- [x] Support button internal loading
- [ ] Support for setting colors
- [ ] Supports custom loading effects

## Install

```sh
npm i delay-loading --save-dev
```

### Global directive

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
