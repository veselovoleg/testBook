<template>
  <div>
    <form>
      <input type="text" v-model="inputValue">
      <span class="reversed">{{ reversedInput }}</span>
    </form>
    <br>
    <form @submit.prevent="onSubmit(inputValue)">
    </form>
  </div>
</template>
<script>
import  axios  from 'axios'

export default {
  props: ['reversed'],
  data: () => ({
    inputValue: "",
    results: []
  }),
  methods: {
        onSubmit(value) {
            const getPromise = axios.get("https://jsonplaceholder.typicode.com/posts?q=" + value)
            getPromise.then(
                results => {  
                    this.results = results.data
                }
            )
            return getPromise
        }
  },
  computed: {
    reversedInput() {
      return this.reversed
        ? this.inputValue
            .split("")
            .reverse()
            .join("")
        : this.inputValue;
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
            if (newVal.trim().length && newVal !== oldVal) { 
                console.log(newVal)
            } 
        }
    }
};
</script>