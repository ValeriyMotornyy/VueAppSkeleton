import item       from '../../../api/crud/item';
import collection from '../../../api/crud/collection';

export default {

    collection: {

        /**
         * Get collection
         *
         * @param callback
         * @param stageId
         * @returns {*|void}
         */
        read: (callback, stageId) => {
            return collection.read(
                callback,
                `actions`,
                { stage: stageId }
            );
        }
    },

    item: {

        /**
         * Create entity
         *
         * @param callback
         * @param data
         * @returns {*|void}
         */
        create: (callback, data) => {
            return item.create(
                callback,
                `entity`,
                data
            );
        },

        /**
         * Get entity
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        read: (callback, id) => {
            return item.read(
                callback,
                `entity/${id}`
            );
        },

        /**
         * Update entity
         *
         * @param callback
         * @param id
         * @param data
         * @returns {*|void}
         */
        update: (callback, { id, data }) => {
            return item.update(
                callback,
                `entity/${id}`,
                data
            );
        },

        /**
         * Delete entity
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        delete: (callback, id) => {
            return item.delete(
                callback,
                `entity/${id}`,
            );
        },
    }

}