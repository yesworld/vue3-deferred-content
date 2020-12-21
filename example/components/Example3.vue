<template>
  <section class="example3">
    <div>
      <h2>Example 3</h2>
      <p>Calling the module without callbacks. Lazy load image</p>
    </div>

    <div class="example">
      <observer-content
        :auto-hide="true"
      >
          <img src="https://placekitten.com/362/282" alt="kitten 3">
      </observer-content>
    </div>

    <div></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example3',
})
</script>