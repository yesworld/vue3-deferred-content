# Vue 3 Lazy load image and component / vue3-deferred-content

A Vue3 component to detect when lazy component or HTML element is becoming visible/hidden on the page. The intersection can be observed once or listened by callback.

[![](https://img.shields.io/npm/v/vue3-deferred-content?color=success&style=flat-square)](https://www.npmjs.com/package/vue3-deferred-content)
![](https://img.shields.io/npm/l/vue3-deferred-content?color=success&style=flat-square)
[![](https://img.shields.io/github/repo-size/yesworld/vue3-deferred-content?style=flat-square)](https://bundlephobia.com/result?p=vue3-deferred-content)
[![](https://img.shields.io/bundlephobia/min/vue3-deferred-content?style=flat-square)](https://bundlephobia.com/result?p=vue3-deferred-content)
![](https://img.shields.io/npm/dw/vue3-deferred-content?color=blue&style=flat-square)
[![](https://img.shields.io/github/issues/yesworld/vue3-deferred-content?style=flat-square&color=yellow)](https://github.com/yesworld/vue3-deferred-content/issues)
[![](https://img.shields.io/github/issues-pr/yesworld/vue3-deferred-content?style=flat-square&color=yellow)](https://github.com/yesworld/vue3-deferred-content/pulls)
[![](https://shields.io/badge/version-3.0-green?logo=Vue.js&style=flat-square)](https://v3.vuejs.org/)
[![](https://img.shields.io/github/stars/yesworld/vue3-deferred-content?style=social)](https://github.com/yesworld/vue3-deferred-content)

[comment]: <> (![]&#40;https://img.shields.io/badge/buy%20me%20a%20coffee-donate-blue.svg?color=orange&style=flat-square&#41;)

## 🚀 Features
- 🔗 **0 dependencies:** No worry about your bundle size
- ✊ **Type Strong:** Written in Typescript
- 📦 **Size:** ~27kb

[Live demo 🎉](https://yesworld.github.io/vue3-deferred-content/)

[comment]: <> (- 🌎 **Browser support:** Use it through CDN)

## 📦 Installation
```sh
$ npm i vue3-deferred-content
# or
$ yarn add vue3-deferred-content
```

## 📎 How to use?

main.js:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueDeferredContent from 'vue3-deferred-content'

const app = createApp(App)
const options = {
  name: 'lazyContent',  // by default: deferred
  
  // by default for all components
  rootMargin: '0px',        // string
  threshold: 0,             // number | number[]
}     
app.use(VueDeferredContent, options)
app.mount('#app')
```

## Examples

1. Standard example with callbacks.
```html
<b>status: {{status}}</b>
<lazy-content
    :auto-hide="false"
    @enter="enterElement"
    @leave="leaveElement"
    @change="changeIntersect"
    @disconnect="disconnect"
>
    <img src="http://placekitten.com/360/280" alt="kitten">
    <p>Number of changes: {{changeCount}}</p>
</lazy-content>
```

```js
export default defineComponent({
  name: 'Example1',
  data:() => ({
    changeCount: 0,
    status: '🙈 Leave',
  }),
  methods: {
    enterElement(target) {
      this.status = '🐵 Enter'
      console.log(this.status, target)
    },
    leaveElement(target) {
      this.status = '🙈 Leave'
      console.log(this.status, target)
    },
    changeIntersect(target) {
      this.changeCount++
      console.log('Change', target)
    },
    disconnect() {
      console.log('Disconnect')
    },
  },
})
```

2. Called once after first enter.
```html
<lazy-content
  :once="true"
  @change="changeIntersect"
>
  <img src="http://placekitten.com/g/361/281" alt="kitten 2">
  <p>Number of changes: {{changeCount}}</p>
</lazy-content>
```

```js
export default defineComponent({
  name: 'Example2',
  data:() => ({
    changeCount: 0,
  }),
  methods: {
    changeIntersect(target) {
      this.changeCount++
      console.log('Change', target)
    },
  },
})
```

3. Calling the module without callbacks. Lazy load image.
```html
<lazy-content>
  <img src="https://placekitten.com/362/282" alt="kitten 3">
</lazy-content>
```

4. Lazy load image and Transition.
```html
<lazy-content>
  <transition name="fade" :appear="true">
    <!-- This DIV tag is required for this example and I don't know why. :( -->
    <div>
      <img src="https://placekitten.com/400/300" alt="kitten 4">
    </div>
  </transition>
</lazy-content>
```

```css
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
```

5. Lazy load image and Transition group.
```html
<lazy-content>
  <transition-group name="list" :appear="true">
      <span v-for="(item, index) in items" :key="item" class="list-item" :style="`transition-delay: ${index * 250}ms;`">
        <img :src="item" alt="kitten 5">
      </span>
  </transition-group>
</lazy-content>
```

```js
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
```

```css
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
```

6. Async Component and Transition.
```html
<lazy-content
  :once="true"
>
  <transition name="fade" :appear="true">
    <AsyncComponent/>
  </transition>
</lazy-content>
```

```js
export default defineComponent({
  name: 'Example6',
  components: {
    AsyncComponent: defineAsyncComponent(() => import('./AsyncComponent.vue')),
  },
})
```

```css
.fade-enter-active,
.fade-leave-active {
    transition: opacity 15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
```

## TODO
- [ ] Test

## License

[MIT License](./LICENSE)

Copyright (c) :suspect: @yesworld
