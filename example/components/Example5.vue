<template>
  <section class="example5">
    <div>
      <h2>Example 5</h2>
      <p>Lazy load image and Transition group</p>
    </div>

    <div class="example">
      <observer-content
        :auto-hide="true"
      >
        <transition-group name="list" :appear="true">
          <span v-for="(item, index) in items" :key="item" class="list-item" :style="`transition-delay: ${index * 250}ms;`">
            <img :src="item" alt="kitten 5">
          </span>
        </transition-group>
      </observer-content>
    </div>

    <div></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Example5',
  data:() => ({
    items: [
      'https://placekitten.com/360/280',
      'https://placekitten.com/361/281',
      'https://placekitten.com/362/282',
    ]
  })
})
</script>

<style lang="scss">
.example5 {
  .placeholder {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .list-item {
    width: 30%;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>
