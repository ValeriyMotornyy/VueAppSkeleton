/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Vue       - Vue instance
| router    - App router
| store     - App store
| bootstrap - Globally exposing some node modules
| filters   - App filters
| App       - App UI (pages and components)
| vuetify   - Vue UI library
|
*/
import Vue     from 'vue';
import router  from './routes/router/';
import store   from './store/';
import              './bootstrap';
import              './filters/date.filter.js'
import App     from './views/App.vue';
import vuetify from '../plugins/vuetify';

// Mount Vue
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');