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
     * Show spinner
     *
     * @returns {*}
     */
    show: () => store.commit('core/spinner/SET_SPINNER', true, { root: true }),

    /**
     * Hide spinner
     *
     * @returns {*}
     */
    hide: () => store.commit('core/spinner/SET_SPINNER', false, { root: true }),
}