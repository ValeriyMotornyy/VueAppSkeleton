/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| axios - Promise based HTTP client for the browser and node.js
| Http  - HTTP helper
| Query - Query helper
| api   - API config
|
*/
import axios       from 'axios';
import HttpHelper  from '../helper/http';
import QueryHelper from '../helper/http';
import api         from '../config/api';

export default {

    /**
     * Wrapper for client GET request
     *
     * @param endpoint
     * @param query
     * @returns {*}
     */
    get: (endpoint, query = null) => {

        // Set headers
        HttpHelper.setHeaders();

        // Sent request
        return axios.get(
            `${api.url}/${endpoint}${QueryHelper.constructQuery(query)}`
        );
    },

    /**
     * Wrapper for client POST request
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    post: (endpoint, data = {}) => {

        // Set headers
        HttpHelper.setHeaders();

        // Send request
        return axios.post(
            `${api.url}/${endpoint}`,
            data
        );
    },

    /**
     * Wrapper for client PUT request
     *
     * @param endpoint
     * @param data
     * @returns {*|IDBRequest<IDBValidKey>|Promise<void>}
     */
    put: (endpoint, data = {}) => {

        // Set headers
        HttpHelper.setHeaders();

        // Send request
        return axios.put(
            `${api.url}/${endpoint}`,
            data
        );
    },

    /**
     * Wrapper for client DELETE request
     *
     * @param endpoint
     * @returns {*}
     */
    delete: (endpoint) => {

        // Set headers
        HttpHelper.setHeaders();

        // Send request
        return axios.delete(
            `${api.url}/${endpoint}`,
        );
    },
};