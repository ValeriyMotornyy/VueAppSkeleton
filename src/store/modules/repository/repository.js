/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| itemActions             - CRUD based Actions created for managing single entity
| itemInCollectionActions - CRUD based Actions created for managing collections of entities
| collectionActions       - CRUD based Actions created for managing entities inside collections
| mutations               - Repository mutations
|
*/
import itemActions             from './actions/item';
import itemInCollectionActions from './actions/itemInCollection';
import collectionActions       from './actions/collection';
import mutations               from './mutations/mutations';

/**
 * Generic store module
 *
 * @param api - (object) entity api
 */
export default function (api) {

    return {

        state: {
            item: {},
            collection: [],
        },

        getters: {
            item:       state => { return state.item },
            collection: state => { return state.collection },
        },

        actions: {
            ...itemActions(api),
            ...itemInCollectionActions(api),
            ...collectionActions(api),
        },

        mutations: {
            ...mutations
        },
    };
};