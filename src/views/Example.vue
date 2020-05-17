<template>
  <div>
    <input
      type="email"
      placeholder="What's your email"
      :class="{ error: $v.email.$error }"
      v-model.trim="email"
      @blur="$v.email.$touch()"
    />
    <!-- Hide message until error -->
    <div v-if="$v.email.$error">
      <p v-if="!$v.email.email" class="errorMessage">
        Please enter a valid email address.
      </p>
      <p v-if="!$v.email.required" class="errorMessage">Email is required.</p>
    </div>
    <button type="submit" :disabled="$v.$invalid">Submit</button>
    <p v-if="$v.$anyError" class="errorMessage">
      Please fill out the required field(s).
    </p>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: null
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="scss" scoped></style>
