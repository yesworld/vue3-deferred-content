<template>
  <h1>Test {{param}}</h1>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    const param = reactive('vita')

    return {
      param
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>
