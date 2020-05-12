import rollTable from './rollTable'
import CommonTable from './CommonTable'

export default {
  install: (Vue) => {
    Vue.component('rollTable', rollTable)
    Vue.component('CommonTable', CommonTable)
  }
}
