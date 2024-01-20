import './assets/main.css';
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

createApp(App).use(router).mount('#app');
