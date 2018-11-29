<template>
    <div>
        <message-toggle />
        <list :items="['list item 1', 'list item 2']" />
        <counter />
        <quantity-component />
    </div>
</template>

<script>
    import MessageToggle from './MessageToggle'
    import List from './List'
    import Counter from './Counter'
    import QuantityComponent from './QuantityComponent'

    export default {
      name: 'page',
      components: {
        MessageToggle,
        List,
        Counter,
        QuantityComponent
      }
    }
</script>