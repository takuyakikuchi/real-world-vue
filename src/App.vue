<template>
  <div id="app" class="container mx-auto px-4">
    <NavBar />
    <router-view class="text-center" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style></style>
