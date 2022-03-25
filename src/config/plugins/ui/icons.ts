import { App } from 'vue'
import iconDependency from '@/dependencies/iconDependency'

export default {
  install: (app: App<Element>) => {
    const vue = app
    const obj = Object()
    obj.svg = iconDependency()
    vue.config.globalProperties.$icon = obj
  }
}
