import { createApp } from 'vue';
import VuePapaParse from 'vue-papa-parse';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VuePapaParse);

app.mount('#app');
