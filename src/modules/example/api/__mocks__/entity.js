import { entity, entities } from '../../test/mocks/entities.mock';

export default {

    collection: {

        /**
         * Get collection
         *
         * @param callback
         * @returns {*|void}
         */
        read: (callback) => {
            return callback(entities);
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
            return callback(entity);
        },

        /**
         * Get entity
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        read: (callback, id) => {
            return callback(entity);
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
            return callback(entity);
        },

        /**
         * Delete entity
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        delete: (callback, id) => {
            return callback({});
        }
    }

}