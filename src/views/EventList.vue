<template>
  <div>
    <h1 class="text-4xl font-bold">Event List</h1>
    <div class="flex justify-center p-8">
      <EventCard :event="event"></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  created() {
    axious
      .get('http://http://localhost:3000/events')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('There was an error.', error.response)
      })
  },
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: '2020/4/19 9:00',
        attendees: ['TK', 'Fumiko']
      }
    }
  }
}
</script>

<style></style>
