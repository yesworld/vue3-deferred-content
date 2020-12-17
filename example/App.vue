<template>
  <header>
    <div class="title">
      <h1>Demo {{name}}</h1>

      <span>Scroll down</span>
      <i class="cross"></i>
    </div>
  </header>

  <Example1/>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Example1 from "./components/Example1.vue"

export default defineComponent({
  components: {
    Example1,
  },
  name: 'App',
  data:() => ({
    name: 'vue3-deferred-content',
  }),

  methods: {},
})
</script>

<style lang="scss"></style>
