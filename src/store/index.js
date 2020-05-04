import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  getters: {
    categoriesLength: store => {
      return store.categories.length
    },
    getEventById: store => id => {
      return store.events.find(event => event.id === id)
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
