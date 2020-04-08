export default {
  install: (Vue) => {
    Vue.directive('format', function (el, binding) {
      el.innerHTML = binding.value.toLocaleString()
    })
  }
}
