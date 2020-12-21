<template>
  <section class="example2">
    <div>
      <h2>Example 2</h2>
      <b>status: {{status}}</b>
      <p>Called once after first enter</p>
    </div>

    <div class="example">
      <observer-content
        :once="true"
        @enter="enterElement"
        @leave="leaveElement"
        @change="changeIntersect"
      >
        <img :class="{hide: !display}" src="http://placekitten.com/g/361/281" alt="kitten 2">
        <p>Number of changes: {{changeCount}}</p>
      </observer-content>
    </div>

    <div></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example2',
  data:() => ({
    changeCount: 0,
    status: '🙈 Leave',
    display: false,
  }),

  methods: {
    enterElement(target: Element) {
      this.status = '🐵 Enter'
      this.display = true
      console.log(this.status, target)
    },
    leaveElement(target: Element) {
      this.status = '🙈 Leave'
      this.display = false
      console.log(this.status, target)
    },
    changeIntersect(target: Element) {
      this.changeCount++
      console.log('Change', target)
    },
  },
})
</script>
