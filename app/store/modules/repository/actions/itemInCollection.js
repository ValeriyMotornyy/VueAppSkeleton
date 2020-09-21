import _ from 'lodash';

/*
|-----------------------------------------------------------------------------------------------
| Entity in collection management actions
|-----------------------------------------------------------------------------------------------
|
| CRUD based Actions created for managing entities inside collections
|
*/
export default function (api) {

    return {

        /**
         * Create single entity (and add to collection)
         *
         * @param commit
         * @param data
         */
        createSingleInCollection: ({ commit }, data) => {
            api.item.create((data) => {
                commit('CREATE_SINGLE_IN_COLLECTION', data);
            }, data);
        },

        /**
         * Read single entity (and set item)
         *
         * @param commit
         * @param data
         */
        readSingleInCollection: ({ commit, state }, id) => {
            commit('SET_SINGLE',
                _.find(state.collection, { 'id': parseInt(id) })
            );
        },

        /**
         * Update single entity (in collection)
         *
         * @param commit
         * @param id
         * @param data
         */
        updateSingleInCollection: ({ commit }, { id, data }) => {
            api.item.update((response) => {
                commit('UPDATE_SINGLE_IN_COLLECTION', response);
            }, { id, data });
        },

        /**
         * Delete single entity (from collection)
         *
         * Removes item from the system (via api call)
         * or only from UI (if item does not yet exist in the system)
         *
         * @param commit
         * @param item
         */
        deleteSingleInCollection: ({ commit }, item) => {

            if (_.has(item, 'id')) {

                // Remove item from the system
                api.item.delete(() => {
                    commit('DELETE_SINGLE_IN_COLLECTION', item);
                }, item.id);
            } else {

                // Remove item from UI only
                commit('DELETE_SINGLE_IN_COLLECTION', item);
            }
        },

    }
}