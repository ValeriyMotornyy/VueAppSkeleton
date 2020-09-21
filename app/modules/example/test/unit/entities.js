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
import Vuex                 from 'vuex';
import { createLocalVue }   from '@vue/tests-utils';
import { entity, entities } from '../mocks/entities.mock';
import module               from '../../store/entity.store';

// Instantiate Vue
const localVue = createLocalVue();

// Mount Vue
localVue.use(Vuex);

// Define store
let store;

// Mock dependency
jest.mock('../../api/entity');

describe('Vuex Store entities', () => {

    /**
     * Tear down / construct new store
     */
    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                item: {},
                collection: [],
            },
            getters: {
                item:       state => { return state.item },
                collection: state => { return state.collection },
            },
            mutations: module.mutations,
            actions: module.actions
        });
    });

    /**
     * @public
     *  readSingle
     */
    test('is read - item (entity)', () => {

        // Dispatch an entity
        store.dispatch('readSingle', { id: 1 });

        // Check a getter
        expect(store.getters.item).toMatchObject(entity);

    });

    /**
     * @public
     *  createSingle
     */
    test('is created - item (entity)', () => {

        // Dispatch an entity
        store.dispatch('createSingle', entity);

        // Check a getter
        expect(store.getters.item).toMatchObject(entity);

    });

    /**
     * @public
     *  updateSingle
     */
    test('is updated - item (entity)', () => {

        // Dispatch an entity
        store.dispatch('updateSingle', entity);

        // Check a getter
        expect(store.getters.item).toMatchObject(entity);

    });

    /**
     * @public
     *  deleteSingle
     */
    test('is deleted - item (entity)', () => {

        // Dispatch an entity
        store.dispatch('deleteSingle');

        // Check a getter
        expect(store.getters.item).toMatchObject({});

    });

    /**
     * @public
     *  readAll
     */
    test('is read - collection (entity)', () => {

        // Dispatch an entity
        store.dispatch('readAll');

        // Check a getter
        expect(store.getters.collection).toMatchObject(entities);

    });

});