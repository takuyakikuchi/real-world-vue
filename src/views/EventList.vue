<template>
  <div>
    <h1>Event List</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >First Event</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style></style>
