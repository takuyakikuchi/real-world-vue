import EventService from '@/services/EventService'

export const namespaced = true

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
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },

  fetchEvents({ commit, dispatch }, { page, limit }) {
    return EventService.getEvents(page, limit)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_TOTAL_COUNT', response.headers['x-total-count'])
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },

  fetchSingleEvent({ commit, dispatch, getters }, id) {
    const event = getters.getEventByID(id)
    if (event) {
      commit('SET_SINGLE_EVENT', event)
    } else {
      // Need to return promise for API call route guard
      return EventService.getEvent(id)
        .then(response => {
          commit('SET_SINGLE_EVENT', response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching an event: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
}
