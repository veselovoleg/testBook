<template>
  <li 
  class="message" 
  style="margin-top: 10px"
  @click="handleClick"
  >{{ message }}</li>
</template>

<script>
export default {
  props: {
    message: String,
    author: {
      type: String,
      default: 'Paco'
    }
  },
  methods: {
    handleClick () {
      this.$emit('message-clicked', this.message)
    }
  }
}
</script>