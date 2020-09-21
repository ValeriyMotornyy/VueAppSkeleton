/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Store        - vuex store
| TokenService - manages JWT token within the app
|
*/
import Store            from '../../store';
import { TokenService } from '../../services/token.service';

/**
 * JWT guard - acts as app middleware to allow user login with presence of JWT token
 *
 * @param to
 * @param from
 * @param next
 * @returns {*}
 */
let JWTMiddleware = (to, from, next) => {

    // Check if a token has been passed into url
    if (to.query.token) {

        // Store token
        TokenService.set(to.query.token);
    }

    // Retrieve token
    const token = TokenService.get();

    // Define passing conditions
    const conditions = [

        // Check if token is not set (cast as boolean)
        !(!!TokenService.get()),

        // Check if the routes is not 401 (Unauthorised)
        to.name !== '401',

        // Check that environment is not 'DEV' mode
        process.env.APP_ENV !== 'dev'
    ];

    // Check if all conditions are met
    if (_.sum(conditions) === _.size(conditions)) {

        // Since no login page exists yet redirect to 401
        return next('/401');
    }

    // Set store data extracted from JWT
    Store.commit('core/user/SET_SINGLE', token.user, { root: true });
    Store.commit('core/user/SET_TOKEN', token.timestamps, { root: true });

    next();
};

export default JWTMiddleware;