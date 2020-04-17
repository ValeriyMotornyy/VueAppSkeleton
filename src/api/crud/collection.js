/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| http    - http client wrapper
| spinner - spinner methods
| alert   - alert methods
|
*/
import http    from '../client/client';
import spinner from '../config/spinner';
import alert   from '../config/alert';

export default {

    /**
     * Get all
     *
     * @param callback
     * @param url
     * @param query
     */
    read: (callback, url, query = null) => {
        spinner.show();
        http.get(
            url,
            query
        ).then((response) => {
            callback(response.data);
            spinner.hide();
        }).catch((error) => {
            spinner.hide();
            alert.show(error.response.status);
        });
    },

    /**
     * Update collection
     *
     * @param callback
     * @param url
     * @param data
     */
    update: (callback, url, data = {}) => {
        spinner.show();
        http.put(
            url,
            data
        ).then((response) => {
            callback(response.data);
            spinner.hide();
        }).catch((error) => {
            spinner.hide();
            alert.show(error.response.status);
        });
    },

}