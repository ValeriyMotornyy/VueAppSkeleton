/*
|-----------------------------------------------------------------------------------------------
| Repository mutations
|-----------------------------------------------------------------------------------------------
|
| _ - lodash, js utility belt
|
*/
import _ from 'lodash';

export default {

    /**
     * Set collection
     *
     * @param state
     * @param data
     * @constructor
     */
    SET_ALL: (state, data) => {
        state.collection = data;
    },

    /**
     * Set single
     *
     * @param state
     * @param data
     * @constructor
     */
    SET_SINGLE: (state, data) => {
        state.item = data;
    },

    /**
     * Create single (add to collection)
     *
     * @param state
     * @param data
     * @constructor
     */
    CREATE_SINGLE_IN_COLLECTION: (state, data) => {
        state.collection.push(data);
    },

    /**
     * Update single (in collection)
     *
     * @param state
     * @param data
     * @constructor
     */
    UPDATE_SINGLE_IN_COLLECTION: (state, data) => {

        // Find object index
        let index = _.findIndex(state.collection, (single) => {
            return single.id === data.id;
        });

        // Replace old version with new
        state.collection.splice(index, 1, data);
    },

    /**
     * Delete single (from collection)
     *
     * @param state
     * @param item
     * @constructor
     */
    DELETE_SINGLE_IN_COLLECTION: (state, item) => {

        // Replace old version with new
        state.collection = _.reject(state.collection, item);
    },

};