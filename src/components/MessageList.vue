<template>
    <ul>
        <Message :message="message" v-for="(message, index) in messages" :key="index"/>
    </ul>
</template>

<script>
import Message from './Message'

export default {
  name: 'list',
  props: ['messages'],
  components: {Message}
}
</script>

<style scoped>
    li{
        list-style: none;
    }
</style>
