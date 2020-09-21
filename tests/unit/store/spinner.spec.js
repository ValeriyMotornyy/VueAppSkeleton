/*
|-----------------------------------------------------------------------------------------------
| Test Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required for the tests
|
| Vuex           - vuex instance
| createLocalVue - vue instance (tests util)
| module         - store module to tests
|
*/
import Vuex               from 'vuex';
import { createLocalVue } from '@vue/tests-utils';
import module             from '../../../app/store/modules/spinner.store.js';

// Instantiate Vue
const localVue = createLocalVue();

// Mount Vue
localVue.use(Vuex);

// Define store
let store;

describe('Vuex Store Spinner', () => {

    /**
     * Tear down / construct new store
     */
    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                spinner: {},
            },
            getters: {
                spinner: state => { return state.spinner },
            },
            mutations: module.mutations,
            actions: module.actions
        });
    });

    /**
     * @public
     *  setSpinner
     */
    test('is activated (action)', () => {

        // Dispatch an action
        store.dispatch('setSpinner', true);

        // Check a getter
        expect(store.getters.spinner).toBeTruthy();

    });

    /**
     * @public
     *  setSpinner
     */
    test('is deactivated (action)', () => {

        // Dispatch an action
        store.dispatch('setSpinner', false);

        // Check a getter
        expect(store.getters.spinner).toBeFalsy();

    });

    /**
     * @private
     *  SET_SPINNER
     */
    test('is activated (mutation)', () => {

        // Commit a mutation
        store.commit('SET_SPINNER', true);

        // Check a getter
        expect(store.getters.spinner).toBeTruthy();

    });

    /**
     * @private
     *  SET_SPINNER
     */
    test('is deactivated (mutation)', () => {

        // Commit a mutation
        store.commit('SET_SPINNER', false);

        // Check a getter
        expect(store.getters.spinner).toBeFalsy();

    });

});