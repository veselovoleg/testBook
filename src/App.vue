<template>
  <div id="app">
    <h1>Hello</h1>
    <MessageList :messages="messages"/>
    <Form />
  </div>
</template>

<script>
import MessageList from './components/MessageList'
import Form from './components/Form'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  methods: {
    showMessage () {
      alert('Hello!')
    }
  },
  components: {
    MessageList,
    Form
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

