export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}
