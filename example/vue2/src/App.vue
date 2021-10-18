<template>
  <div id="app">
    <div v-delay-loading="loading" data-loading-text="加载文本" data-loading-color="green" data-loading-icon="<div class='boxLoading'></div>">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <button @click="toggle">切换</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
      loading: false
    }
  },

  methods: {
    toggle(){
      this.loading = !this.loading
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
