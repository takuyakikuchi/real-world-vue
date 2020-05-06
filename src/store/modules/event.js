import EventService from '@/services/EventService'

export const state = {
  event: {},
  events: [],
  eventTotalCount: 0
}

export const getters = {
  getEventByID: state => id => {
    return state.events.find(event => event.id === id)
  }
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_TOTAL_COUNT(state, count) {
    state.eventTotalCount = count
  },
  SET_SINGLE_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event.data)
    })
  },
  fetchEvents({ commit }, { page, limit }) {
    return EventService.getEvents(page, limit)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_TOTAL_COUNT', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchSingleEvent({ commit, getters }, id) {
    const event = getters.getEventByID(id)
    if (event) {
      commit('SET_SINGLE_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_SINGLE_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}
