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
     * Create single
     *
     * @param callback
     * @param url
     * @param data
     */
    create: (callback, url, data = {}) => {
        spinner.show();
        http.post(
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

    /**
     * Get single
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
     * Update single
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

    /**
     * Delete single
     *
     * @param callback
     * @param url
     */
    delete: (callback, url) => {
        spinner.show();
        http.delete(
            url
        ).then((response) => {
            callback(response.data);
            spinner.hide();
        }).catch((error) => {
            spinner.hide();
            alert.show(error.response.status);
        });
    }

}