<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- @attributes: place-holder and type -->
    <select :value="value" v-bind="$attrs" @change="updateValue">
      <option
        :key="option"
        :selected="value === option"
        :value="option"
        v-for="option in options"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String,
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
