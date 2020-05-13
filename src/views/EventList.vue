<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page !== 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev page</router-link
      >
    </template>
    <template v-if="hasNextPage && page != 1">|</template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
import store from '@/store/index'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page || 1)
  store.dispatch('event/fetchEvents', { page: currentPage }).then(() => {
    // Pass current page as a prop to the component
    routeTo.params.page = currentPage
    next()
  })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  // Before enter the route
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  // Before update the route
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.event.eventTotalCount > this.page * 3
    },
    ...mapState(['event', 'user'])
  }
}
</script>
