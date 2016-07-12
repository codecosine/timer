<template>
    <div>
        <header-component/>
        <div class="jumbotron">
          <h1>任务追踪</h1>
          <p>
            <strong>
              <a v-link="'/time-entries'">创建一个任务</a>
            </strong>
          </p>
        </div>

             <other-component/>
    </div>
</template>

<script>
    import HeaderComponent from './components/Header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
