/*
|-----------------------------------------------------------------------------------------------
| Collection management actions
|-----------------------------------------------------------------------------------------------
|
| CRUD based Actions created for managing collections of entities
|
*/
export default function (api) {

    return {

        /**
         * Get collection
         *
         * @param commit
         * @param params
         */
        readAll: ({ commit }, params = null) => {
            api.collection.read((data) => {
                commit('SET_ALL', data);
            }, params);
        },

    }
}