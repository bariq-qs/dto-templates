import { App } from 'vue'
import primeComponent from './ui/primeComponent'
import enumBase from './ui/enum'
import icons from './ui/icons'

const definePlugin = (app: App<Element>) => {
  const vue = app
  vue.use(primeComponent)
  vue.use(enumBase)
  vue.use(icons)
}

export default definePlugin
