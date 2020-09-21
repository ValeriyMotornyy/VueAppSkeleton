import { user, users } from '../../../tests/mocks/user.mock';

export default {

    collection: {

        /**
         * Get all users
         *
         * @param callback
         * @returns {*|void}
         */
        read: (callback) => {
            return callback(users);
        }
    },

    item: {

        /**
         * Get user
         *
         * @param callback
         * @returns {*|void}
         */
        read: (callback, id) => {
            return callback(user);
        }
    },
}