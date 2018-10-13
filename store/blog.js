// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const blog = new Vuex.Store({
    state: {
      pageHeadline: "Headline from the store"
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });