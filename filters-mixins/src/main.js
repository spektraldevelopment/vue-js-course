import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Global filter
Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    //Use with caution because it will 
    //get used in every Vue instance
    //gets called three times:
    //main.js
    //App.vue
    //List.vue
    console.log('Global created mixin');
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
