const util = {}


util.foo = function() {
  console.log('Hello')
}


export default {
  install: function(Vue) {
    console.log('installing')
    Object.defineProperty(Vue.prototype, '$util', { value: util })
  },
}
