<template>
  <li class="message" style="margin-top: 10px">{{ message }}</li>
</template>

<script>
export default {
  props: {
    message: String,
    author: {
      type: String,
      default: 'Paco'
    }
  }
}
</script>