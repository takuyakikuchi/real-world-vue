export const namespaced = true

export const state = {
  notifications: []
}

let lastID = 0

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: (lastID += 1)
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications.filter(notification => {
      notification.id !== notificationToRemove.id
    })
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
