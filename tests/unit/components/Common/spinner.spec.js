/*
|-----------------------------------------------------------------------------------------------
| Test Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required for the tests
|
| utils          - vue tests util
| TestComponent  - vue component to tests
| Vuex           - vuex instance
| module         - store module to tests
|
*/
import { createLocalVue, shallowMount } from '@vue/tests-utils';
import TestComponent                    from '../../../../app/views/common/Spinner';
import Vuex                             from 'vuex';
import module                           from '../../../../app/store/modules/spinner.store.js';

// Instantiate Vue
const localVue = createLocalVue();

// Mount Vue
localVue.use(Vuex);

// Define store
let store;

// Define element wrapper
let wrapper;

describe('UI Spinner', () => {


    beforeEach(() => {

        wrapper = shallowMount(TestComponent, {}, {
            localVue: localVue,
            attachToDocument: true,
            sync: false,
        });

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

    test('is visible', () => {

        // Dispatch an action
        store.dispatch('setSpinner', true);

        // Check if spinner is present
        expect(wrapper.toContainElement('spinner-stub'));

    });

});