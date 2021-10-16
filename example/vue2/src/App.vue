<template>
  <div id="app">
    <div v-delay-loading="loading" data-loading-text="加载文本">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <button @click="toggle">切换</button>
  </div>
</template>

<script>
import { DelayLoading } from '../../../dist'

export default {
  name: 'App',
  directives: {
    DelayLoading
  },

  data(){
    return {
      loading: false
    }
  },

  methods: {
    toggle(){
      this.loading = !this.loading
      console.log(this.loading)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
