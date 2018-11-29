<template>
    <ul class="parent-ul">
        <li v-for="(item, index) in items" :key="index">
            {{ item }}
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'list',
    props: [
      'items'
    ]
  }
</script>