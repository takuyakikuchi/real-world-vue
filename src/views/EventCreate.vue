<template>
  <div>
    <h1 class="text-4xl font-bold">Event Create</h1>
    <p>{{ user.name }}</p>
    <p>This event was created by XXXX</p>
    <ul v-for="category in categories" :key="category">
      <li>{{ category }}</li>
    </ul>
    <p>{{ categoriesLength }}</p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['categoriesLength', 'getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style></style>
