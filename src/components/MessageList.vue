<template>
    <ul>
        <Message 
        :message="message" 
        v-for="(message, index) in messages" 
        :key="index"
        @message-clicked="handleMessageClick"
        />
    </ul>
</template>

<script>
import Message from './Message'

export default {
  name: 'list',
  props: ['messages'],
  methods: {
    handleMessageClick (message) {
      console.log(message)
    }
  },
  components: {Message}
}
</script>

<style scoped>
    li{
        list-style: none;
        cursor: pointer;
    }
</style>
