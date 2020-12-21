<template>
  <section class="example6">
    <div>
      <h2>Example 6</h2>
      <p>Async Component and Transition</p>
    </div>

    <div class="example">
      <observer-content
        :auto-hide="true"
        :once="true"
      >
        <transition name="fade" :appear="true">
          <AsyncComponent/>
        </transition>
      </observer-content>
    </div>

    <div></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example6',
  components: {
    AsyncComponent: defineAsyncComponent(() => import(/* webpackChunkName: "AsyncExampleComponent" */ './AsyncComponent.vue')),
  },
})
</script>

<style lang="scss">
.example6 {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
