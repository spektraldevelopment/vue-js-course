import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

//5 hooks - lifecycles
//bind - Once directive is attached
//inserted - Inserted into parent node
//update - Once component is updated (without children)
//componentUpdated - Once component is updated (with children)
//unbind - once directive is removed

//You will use bind and update the most

//arguments, value, modifiers

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.background = 'green';
    //el.style.background = binding.value;

    var delay = 0;

    if(binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg === "background") {
        el.style.background = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);

  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
