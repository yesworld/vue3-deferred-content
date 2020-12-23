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

## TODO
- [ ] Test

## License

[MIT License](./LICENSE)

Copyright (c) :suspect: @yesworld