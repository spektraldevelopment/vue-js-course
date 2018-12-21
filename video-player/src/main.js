//entry piont of our app
import Vue from 'vue';
import App from './App';

//Create new Vue instance
//h = create element
new Vue({
    render: h => h(App)
}).$mount('#app');