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
    results: [],
    task: {}
  }),
  methods: {
        onSubmit(value) {
            const getPromise = axios.getResults("https://jsonplaceholder.typicode.com/posts?q=" + value)
            getPromise.then(
                results => {  
                    this.results = results.data
                }
            )
            return getPromise
        },
         getTask(value) {
            const getPromise = axios.getTask("https://jsonplaceholder.typicode.com/todos/" + value)
            getPromise.then(
                results => {  
                    this.task = results.data
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