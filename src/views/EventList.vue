<template>
  <div>
    <h1 class="text-4xl font-bold">Event List</h1>
    <div class="flex justify-center p-8">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      ></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error.', error.response)
      })
  },
  data() {
    return {
      events: []
    }
  }
}
</script>

<style></style>
