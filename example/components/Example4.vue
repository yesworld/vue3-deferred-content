<template>
  <section class="example4">
    <h2>Example 4</h2>
    <p>Lazy load image and Transition</p>

    <div class="example">
      <observer-content
        :auto-hide="true"
      >
        <transition name="fade" :appear="true">
          <div>
            <img src="https://placekitten.com/400/300" alt="kitten 4">
          </div>
        </transition>
      </observer-content>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example4',
})
</script>

<style lang="scss">
.example4 {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
