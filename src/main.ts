import { createApp } from 'vue';
import { createPinia } from 'pinia';
import CardVue from './components/CardVue.vue';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('card-vue', CardVue);

app.mount('#app');
