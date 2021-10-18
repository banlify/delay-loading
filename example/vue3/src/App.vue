<template>
  <div v-if="display" class="wrapper" v-delay-loading="loading">
    <HelloWorld msg="You did it!" />
  </div>

  <button style="margin: 30px" v-delay-loading.inline="loading">按钮内加载</button>

  <button @click="toggle">切换</button>
</template>

<script>
import Loading from '../../../index'

export default {
  directives: {
    DelayLoading: Loading
  }
}
</script>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

const loading = ref(false)
const display = ref(true)

const toggle = () => {
  loading.value = !loading.value

  // setTimeout(() => {
  //   display.value = !display.value
  // }, 1000)
}
</script>


<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
