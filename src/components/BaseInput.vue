<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- @attributes: place-holder and type -->
    <input
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
      v-on="listeners"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
  mixins: [formFieldMixin],
  props: {
    value: [String, Number]
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
