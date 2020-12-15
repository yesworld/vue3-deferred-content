# vue3-deferred-content


## 🚀 Features
- ⚡ **0 dependencies:** No worry about your bundle size
- 🦾 **Type Strong:** Written in Typescript
- 💪 **Small Size:** Only 0kb
- 🌎 **Browser support:** Use it through CDN

## 📎 Installation
```sh
$ npm i vue3-deferred-content
# or
$ yarn add vue3-deferred-content
```

## 🌎 CDN

CDN: https://unpkg.com/vue3-deferred-content/dist/vue3-deferred-content.min.js
```html
<script src="https://unpkg.com/vue3-deferred-content/dist/vue3-deferred-content.min.js"></script>
<script>
  Vue.createApp(App).use(vueDeferredContent)
  ...
</script>
```

## 👽 Usage

main.js:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueDeferredContent from 'vue3-deferred-content'

const app = createApp(App)
app.use(VueDeferredContent, {
  // options...
})
app.mount('#app')
```

## 📄 TODO
- [ ] rollup
