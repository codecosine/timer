<template>
    <div class = "container">
      <ul class="nav bs-do">
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>

      </ul>
      <button @click='increment'>Increment +1</button>

    </div>
</template>

<script>
  import { incrementCounter } from '../vuex/actions'

  export default{
      vuex: {
        actions: {
          increment: incrementCounter
        }
      }

    }
</script>
