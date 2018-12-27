import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
    //history tell the router to use the browser router
    mode: 'history',
    routes: [
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm},
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

//we provide the view instance with the store
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');