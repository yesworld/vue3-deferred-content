<template>
  <section class="example4">
    <div>
      <h2>Example 4</h2>
      <p>Lazy load image and Transition</p>
    </div>

    <div class="example">
      <observer-content>
        <transition name="fade" :appear="true">
          <div>
            <img src="https://placekitten.com/400/300" alt="kitten 4">
          </div>
        </transition>
      </observer-content>
    </div>

    <div></div>
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
