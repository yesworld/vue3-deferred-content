<template>
  <h1>Test {{param}}</h1>
  <deferred></deferred>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'App',
  data:() => ({
    param: 'test'
  }),
})
</script>

<style>
h1 {
  text-align: center;
}
</style>
