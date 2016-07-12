<template>
    <div class = "container">
      <div class="btn-group" role="group" aria-label="...">
        <button type="button" @click="newEvent" class="btn btn-default">newEvent</button>
        <button type="button" @click="deleteEvent(activeEvent)" class="btn btn-default">delteEvent</button>
        <button type="button" class="btn btn-default">Right</button>
      </div>



      <!-- 渲染笔记列表 -->
      <div class="container">
        <div class="list-group">
          <a v-for="event in Events" class="list-group-item" href="#" :class="{active: activeEvent == event}" @click="updateActiveEvent(event)">
            <h4 class="list-group-item-heading">
              {{event.title.trim().substring(0,30)}}
            </h4>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
  import { newEvent, deleteEvent, updateActiveEvent } from '../vuex/actions';
  import { activeEvent, Events} from '../vuex/getters';

  export default{
      vuex: {
        getters:{
          Events,
          activeEvent
        },
        actions: {
          newEvent,
          deleteEvent,
          updateActiveEvent
        }
      }

    }
</script>
