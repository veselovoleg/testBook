<template>
  <div id="app">
    <h1>Hello</h1>
    <MessageList :messages="messages"/>
  </div>
</template>

<script>
import MessageList from './components/MessageList'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  methods: {
    showMessage () {
      alert('Hello!')
    }
  },
  components: {
    MessageList
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

