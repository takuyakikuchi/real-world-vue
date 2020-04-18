<template>
  <div id="nav" class="flex justify-between">
    <div class="font-bold text-xl text-green-500">
      <router-link :to="{ name: 'event-list' }">Real World Events</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
