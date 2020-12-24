# vue3-deferred-content

A Vue3 component to detect when HTML element or component is becoming visible/hidden on the page.

[![](https://img.shields.io/npm/v/vue3-deferred-content?color=success&style=flat-square)](https://www.npmjs.com/package/vue3-deferred-content)
![](https://img.shields.io/npm/l/vue3-deferred-content?color=success&style=flat-square)
![](https://img.shields.io/github/repo-size/yesworld/vue3-deferred-content?style=flat-square)
![](https://img.shields.io/bundlephobia/min/vue3-deferred-content?style=flat-square)

[comment]: <> (![]&#40;https://img.shields.io/badge/buy%20me%20a%20coffee-donate-blue.svg?color=orange&style=flat-square&#41;)

[comment]: <> (![]&#40;https://img.shields.io/npm/dw/vue3-deferred-content?color=success&style=flat-square&#41;)
[comment]: <> ([![]&#40;https://img.shields.io/npm/dw/vue3-deferred-content?color=success&style=flat-square&#41;]&#40;https://www.npmjs.com/package/vue3-deferred-content&#41;)


## 🚀 Features
- 🔗 **0 dependencies:** No worry about your bundle size
- 🦾 **Type Strong:** Written in Typescript
- 📦 **Size:** ~27kb

[comment]: <> (- 🌎 **Browser support:** Use it through CDN)

## 📎 Installation
```sh
$ npm i vue3-deferred-content
# or
$ yarn add vue3-deferred-content
```

## 👽 Usage

main.js:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueDeferredContent from 'vue3-deferred-content'

const app = createApp(App)
const options = {
  name: '',       // string
  threshold: '',  // number | number[]
  rootMargin: '', // string
}
app.use(VueDeferredContent, options)
app.mount('#app')
```

## Examples - How to use?

1. Standard example with callbacks.
```html
<b>status: {{status}}</b>
<observer-content
    @enter="enterElement"
    @leave="leaveElement"
    @change="changeIntersect"
    @disconnect="disconnect"
>
    <img src="http://placekitten.com/360/280" alt="kitten">
    <p>Number of changes: {{changeCount}}</p>
</observer-content>
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
<observer-content
  :once="true"
  @change="changeIntersect"
>
  <img src="http://placekitten.com/g/361/281" alt="kitten 2">
  <p>Number of changes: {{changeCount}}</p>
</observer-content>
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
<observer-content
  :auto-hide="true"
>
  <img src="https://placekitten.com/362/282" alt="kitten 3">
</observer-content>
```

4. Lazy load image and Transition.
```html
<observer-content
  :auto-hide="true"
>
  <transition name="fade" :appear="true">
    <!-- This DIV tag is required for this example and I don't know why. :( -->
    <div>
      <img src="https://placekitten.com/400/300" alt="kitten 4">
    </div>
  </transition>
</observer-content>
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
<observer-content
  :auto-hide="true"
>
  <transition-group name="list" :appear="true">
      <span v-for="(item, index) in items" :key="item" class="list-item" :style="`transition-delay: ${index * 250}ms;`">
        <img :src="item" alt="kitten 5">
      </span>
  </transition-group>
</observer-content>
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
<observer-content
  :auto-hide="true"
  :once="true"
>
  <transition name="fade" :appear="true">
    <AsyncComponent/>
  </transition>
</observer-content>
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