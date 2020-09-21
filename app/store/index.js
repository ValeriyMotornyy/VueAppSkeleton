/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Vue     - Vue instance
| Vuex    - Vuex (store) library
| modules - collected vuex modules
|
*/
import Vue from 'vue';
import Vuex from 'vuex';
import modules from '../tasks/import/store.js'

Vue.use(Vuex);

// Export modules
export default new Vuex.Store({ modules });
