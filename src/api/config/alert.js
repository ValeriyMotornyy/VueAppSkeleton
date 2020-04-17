/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| store - vuex store
|
*/
import store from '../../store';

export default {

    /**
     * Display alert
     *
     * @param httpCode
     * @returns {*}
     */
    show: (httpCode) => store.dispatch('core/errorAlert/setErrorAlert', httpCode)
}