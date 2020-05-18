<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- @attributes: place-holder and type -->
    <select
      :value="value"
      v-bind="$attrs"
      @change="updateValue"
      v-on="$listeners"
    >
      <option
        :key="option.id"
        :selected="value === option"
        :value="option"
        v-for="option in options"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
