/*
|-----------------------------------------------------------------------------------------------
| Test Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required for the test
|
| utils          - vue test util
| TestComponent  - vue component to test
| Vuex           - vuex instance
| module         - store module to test
|
*/
import { createLocalVue, shallowMount } from '@vue/test-utils';
import TestComponent                    from '../../../../src/views/common/Spinner';
import Vuex                             from 'vuex';
import module                           from '../../../../src/store/modules/spinner.store.js';

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