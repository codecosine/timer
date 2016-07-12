/**
 * Created by codecosine on 16-7-9.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
  count : 1
};

// mutations
const mutations = {
  INCREMENT (state, data) {
    state.count = state.count + data;
  }
};


export default new Vuex.Store({
  state,
  mutations
});
