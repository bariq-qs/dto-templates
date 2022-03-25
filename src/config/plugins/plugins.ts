import { App } from 'vue'
import primeComponent from './ui/primeComponent'
import enumBase from './ui/enum'

const definePlugin = (app: App<Element>) => {
  const vue = app
  vue.use(primeComponent)
  vue.use(enumBase)
}

export default definePlugin
