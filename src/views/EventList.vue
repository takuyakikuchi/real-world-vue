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
export default {
  components: {
    EventCard
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
