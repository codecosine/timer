/**
 * Created by codecosine on 16-7-9.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
  events:[],
  activeEvent:{},
  content:''
};

// mutations
const mutations = {
  // 初始化 state
  INIT_STORE(state, data) {
    state.events = data.events;
    state.activeEvent = data.activeEvent;
  },
  NEW_EVENT (state, data){
    const newevent = {
      id: +new Date(),
      title: '新笔记',
      content: ''
    };
    state.events.push(newevent);
    state.activeEvent = newevent;
  },
  SET_ACTIVE_EVENT(state, data) {
    state.activeEvent = data;
  },
  DELETE_EVENT (state){
    state.events.$remove(state.activeEvent);
    state.activeEvent = state.events[0] || {};
  }
};


export default new Vuex.Store({
  state,
  mutations
});
