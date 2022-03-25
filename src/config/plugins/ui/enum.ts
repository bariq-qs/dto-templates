import { App } from 'vue'
import inputEnum from '@/utils/data/source/local/enum/inputEnum'

export default {
  install: (app: App<Element>) => {
    const vue = app
    const obj = Object()
    obj.input = inputEnum
    vue.config.globalProperties.$enumBase = obj
  }
}
