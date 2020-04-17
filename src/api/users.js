import item       from './crud/item';
import collection from './crud/collection';

export default {

    collection: {

        /**
         * Get all users
         *
         * @param callback
         * @returns {*|void}
         */
        read: (callback) => {
            return collection.read(
                callback,
                `users`
            );
        }
    },

    item: {

        /**
         * Create user
         *
         * @param callback
         * @param data
         * @returns {*|void}
         */
        create: (callback, data) => {
            return item.create(
                callback,
                `user`,
                data
            );
        },

        /**
         * Get user
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        read: (callback, id) => {
            return item.read(
                callback,
                `user/${id}`
            );
        },

        /**
         * Update user
         *
         * @param callback
         * @param id
         * @param data
         * @returns {*|void}
         */
        update: (callback, { id, data }) => {
            return item.update(
                callback,
                `user/${id}`,
                data
            );
        },

        /**
         * Delete user
         *
         * @param callback
         * @param id
         * @returns {*|void}
         */
        delete: (callback, id) => {
            return item.delete(
                callback,
                `user/${id}`,
            );
        },
    }

}