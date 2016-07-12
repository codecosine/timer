<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" src="...">
        </a>
      </div>
    </div>
  </nav>
  <h3>Count is {{ counterValue }}</h3>

</template>
<script>
  import { getCount } from '../vuex/getters'
  export default {
    vuex: {
      getters: {
        // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
        counterValue: getCount
      }
    }
  }
</script>
