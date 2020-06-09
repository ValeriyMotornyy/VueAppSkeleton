/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| query-string - node query string builder
| searchKey    - config params
|
*/
import queryBuilder from 'query-string';
import { searchKey } from '../config/api';

/**
 * Http client helper methods
 */
export default {

    /**
     * Construct query string
     *
     * @param query
     * @returns {string|string}
     */
    constructQuery: (query) => {
        return !!query ? `?${queryBuilder.stringify(query)}` : '';
    },

    /**
     * Search query
     *
     * @param query
     * @returns {*}
     */
    setSearchParam: (query) => {
        return query ? { searchKey: query } : '';
    }
};