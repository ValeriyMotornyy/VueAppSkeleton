/*
|-----------------------------------------------------------------------------------------------
| Test Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required for the tests
|
| Vuex           - vuex instance
| createLocalVue - vue instance (tests util)
| mocks          - mock objects for current tests
| module         - store module to tests
|
*/
import Vuex                from 'vuex';
import { createLocalVue }  from '@vue/tests-utils';
import { user, users }     from '../../mocks/user.mock';
import { token }           from '../../mocks/token.mock';
import module              from '../../../app/store/modules/user.store';

// Instantiate Vue
const localVue = createLocalVue();

// Mount Vue
localVue.use(Vuex);

// Define store
let store;

// Mock dependency
jest.mock('../../../app/api/users');

describe('Vuex Store User', () => {

    /**
     * Tear down / construct new store
     */
    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                token: {},
                ...module.state,
            },
            getters: {
                token: state => { return state.token },
                ...module.getters,
            },
            mutations: module.mutations,
            actions: module.actions
        });
    });

    /**
     * @public
     *  readAll
     */
    test('is set - users (action)', () => {

        // Dispatch an action
        store.dispatch('readAll');

        // Check a getter
        expect(store.getters.collection).toMatchObject(users);

    });

    /**
     * @public
     *  readSingle
     */
    test('is set - user (action)', () => {

        // Dispatch an action
        store.dispatch('readSingle', user);

        // Check a getter
        expect(store.getters.item).toMatchObject(user);

    });

    /**
     * @private
     *  SET_ALL
     */
    test('is set - users (mutation)', () => {

        // Commit a mutation
        store.commit('SET_ALL', users);

        // Check a getter
        expect(store.getters.collection).toMatchObject(users);

    });

    /**
     * @private
     *  SET_USER
     */
    test('is set - user (mutation)', () => {

        // Commit a mutation
        store.commit('SET_SINGLE', user);

        // Check a getter
        expect(store.getters.item).toMatchObject(user);

    });

    /**
     * @private
     *  SET_TOKEN
     */
    test('is set - token (mutation)', () => {

        // Commit a mutation
        store.commit('SET_TOKEN', token);

        // Check a getter
        expect(store.getters.token).toMatchObject(token);

    });

});