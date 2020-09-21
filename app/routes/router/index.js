/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Vue           - Vue instance
| Router        - Vue router library
| Routes        - App routes
| JWTMiddleware - JWT middleware
|
*/
import Vue           from 'vue';
import Router        from 'vue-router';
import Routes        from '../../tasks/import/routes';
import JWTMiddleware from '../middleware/jwt';

// Mount Vue Router plugin
Vue.use(Router);

// Setup router config
const config = {
    mode: 'history',
    routes: Routes,
};

// Instantiate router
const index = new Router(config);

/**
 * Route Guard: preform checks before access each route
 */
index.beforeEach(JWTMiddleware);

export default index;