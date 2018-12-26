import Vue from 'vue';
import App from './App';
import store from './store'

//we provide the view instance with the store
new Vue({
    store,
    render: h => h(App)
}).$mount('#app');