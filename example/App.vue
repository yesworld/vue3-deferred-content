<template>
  <header>
    <div class="title">
      <h1>Demo {{name}}</h1>
      <h2>A Vue3 component to detect when HTML element or lazy component is becoming visible/hidden on the page. The intersection can be observed once or listened by callback.</h2>
      <span>Scroll down</span>
      <i class="cross"></i>
    </div>
  </header>

  <Example1/>
  <Example2/>
  <Example3/>
  <Example4/>
  <Example5/>
  <Example6/>

  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Example1 from "./components/Example1.vue"
import Example2 from "./components/Example2.vue"
import Example3 from "./components/Example3.vue"
import Example4 from "./components/Example4.vue"
import Example5 from "./components/Example5.vue"
import Example6 from "./components/Example6.vue"
import Footer from "./components/Footer.vue"

export default defineComponent({
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Footer,
  },
  name: 'App',
  data:() => ({
    name: 'vue3-deferred-content',
  }),

  methods: {},
})
</script>

<style lang="scss"></style>
