<template>
  <section>
    <div>
      <h2>Example 1</h2>
      <b>status: {{status}}</b>
      <p>Standard example with callbacks.</p>
    </div>

    <div class="example">
      <observer-content
        @enter="enterElement"
        @leave="leaveElement"
        @change="changeIntersect"
        @disconnect="disconnect"
      >
        <img :class="{hide: !display}" src="http://placekitten.com/360/280" alt="kitten">
        <p>Number of changes: {{changeCount}}</p>
      </observer-content>
    </div>

    <div></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example1',
  data:() => ({
    changeCount: 0,
    status: '🙈 Leave',
    display: false,
  }),

  methods: {
    enterElement(target: Element) {
      this.status = '🐵 Enter'
      this.display = true
      // console.log(this.status, target)
    },
    leaveElement(target: Element) {
      this.status = '🙈 Leave'
      this.display = false
      // console.log(this.status, target)
    },
    changeIntersect(target: Element) {
      this.changeCount++
      // console.log('Change', target)
    },
    disconnect() {
      // console.log('Disconnect')
    },
  },
})
</script>

<style lang="scss"></style>
