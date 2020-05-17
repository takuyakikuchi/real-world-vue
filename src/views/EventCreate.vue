<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        :options="categories"
        label="Select a category"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>
      <div class="field">
        <BaseInput
          label="Title"
          v-model="event.title"
          placeholder="Add an event title"
          type="text"
        />
      </div>

      <div class="field">
        <BaseInput
          label="Description"
          v-model="event.description"
          placeholder="Add a description"
          type="text"
        />
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <BaseInput
          label="Location"
          v-model="event.location"
          placeholder="Add a location"
          type="text"
        />
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEvent(),
      times
    }
  },
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    createFreshEvent() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 1000000000)
      return {
        id: id,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    },
    createEvent() {
      NProgress.start()
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          // redirect to event-show page
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEvent()
        })
        .catch(() => {
          NProgress.done()
        })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
