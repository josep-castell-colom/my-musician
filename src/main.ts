import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

import CardVue from './components/CardVue.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component('card-vue', CardVue);

app.mount('#app');
