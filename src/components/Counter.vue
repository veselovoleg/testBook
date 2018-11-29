<template>
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
  name: 'counter',
  data: () => ({
    count: 0
  }),
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

