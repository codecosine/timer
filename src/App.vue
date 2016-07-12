<template>
  <div id="app" class="app">
      <Header></Header>
      <TimeTree></TimeTree>
  </div>
</template>



<script>

  import Header from './components/Header.vue'
  import TimeTree from './components/TimeTree.vue'
  import store from './vuex/store.js'

  export default {
    components: {
      Header,
      TimeTree
    },
    store:store
  }
</script>
