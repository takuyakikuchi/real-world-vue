<template>
  <router-link
    :to="{ name: 'event-show', params: { id: event.id } }"
    class="w-1/2"
  >
    <div
      class="rounded shadow-lg bg-gray-100 transform hover:shadow-2xl hover:scale-110"
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ event.title }}</div>
        <p class="text-gray-700 text-base">@{{ event.date }}</p>
        <p class="text-gray-700 text-base">
          {{ event.attendees.length }} attendees
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['event']
}
</script>

<style lang="scss" scoped></style>
