import { App } from '@vue/runtime-core'

import DeferredContent from './DeferredContent'
import { DeferredOptions } from './type'

export default {
  install (Vue: App, settings: DeferredOptions): void {
    if (!('IntersectionObserver' in window)) {
      console.warn('[VueDeferred] IntersectionObserver not found. Use polyfill IntersectionObserver: https://github.com/w3c/IntersectionObserver/tree/master/polyfill')
      return
    }

    const name = typeof settings.name === 'string' ? settings.name : DeferredContent.name

    console.log({settings})

    Vue.component(name, DeferredContent)
  }
}