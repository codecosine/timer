<template>
  <div id="app" class="app">
      <Toolbar></Toolbar>
      <Time-tree></Time-tree>
  </div>
</template>



<script>

  import Toolbar from './components/Toolbar.vue'
  import Timetree from './components/TimeTree.vue'
  import store from './vuex/store.js'
  import { initStore } from './vuex/actions';


  export default {
    components: {
      Toolbar:Toolbar,
      TimeTree:Timetree
    },
    store:store,
    vuex: {
      actions: {
        initStore
      }
    },
    ready() {
      this.initStore()
    }
  }
</script>
