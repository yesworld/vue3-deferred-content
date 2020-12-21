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

    if (typeof settings.threshold !== 'undefined') {
      DeferredContent.props.threshold.default = () => {
        return settings.threshold
      }
    }

    if (typeof settings.rootMargin !== 'undefined') {
      DeferredContent.props.rootMargin.default = () => {
        return settings.rootMargin
      }
    }

    Vue.component(name, DeferredContent)
  }
}