import { App } from '@vue/runtime-core'
import { DeferredOptions } from './type'

export default {
  /**
   * install plugin
   */
  install (Vue: App, options: DeferredOptions): void {
    console.log({options})
  }
}