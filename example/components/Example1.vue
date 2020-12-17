<template>
  <section class="row-1">
    <h2>Example 1</h2>
    <b>status: {{status}}</b>
    <p>Стандартный пример с вызовом событий.</p>

    <div class="example">
      <observer-content
          class="example-1"
          @enter="enterElement"
          @leave="leaveElement"
          @change="changeIntersect"
          @disconnect="disconnect"
      >
        <img src="http://placekitten.com/200/140" width="200" height="140" alt="kitten">
        <p>Number of changes: {{changeCount}}</p>
      </observer-content>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example1',
  data:() => ({
    changeCount: 0,
    status: 'Leave',
  }),

  methods: {
    enterElement(target: Element) {
      this.status = 'Enter'
      console.log(this.status, target)
    },
    leaveElement(target: Element) {
      this.status = 'Leave'
      console.log(this.status, target)
    },
    changeIntersect(target: Element) {
      this.changeCount++
      console.log('Change', target)
    },
    disconnect() {
      console.log('Disconnect')
    },
  },
})
</script>

<style lang="scss"></style>
