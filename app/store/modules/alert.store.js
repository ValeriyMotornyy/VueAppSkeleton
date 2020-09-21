const state = {
    visible: false,
    message: '',
    statusMap: {
        '400': 'ERROR 400 - BAD REQUEST',
        '401': 'ERROR 401 - UNAUTHORIZED',
        '403': 'ERROR 403 - FORBIDDEN',
        '404': 'ERROR 404 - NOT FOUND',
        '500': 'ERROR 500 - INTERNAL SERVER ERROR',
        '502': 'ERROR 502 - BAD GATEWAY',
        '503': 'ERROR 503 - SERVICE UNAVAILABLE',
        '504': 'ERROR 504 - GATEWAY TIMEOUT',
    },
};

const getters = {
    visible: state => { return state.visible },
    message: state => { return state.message }
};

const actions = {
    setErrorAlert: ({ commit }, statusCode) => {
        commit('SET_ERROR_ALERT', statusCode);
        commit('TOGGLE_ALERT', true);

        setTimeout(() => { 
            commit('TOGGLE_ALERT', false)
        }, 3000)
    },
};

const mutations = {
    SET_ERROR_ALERT: (state, statusCode) => {
        state.message = state.statusMap[statusCode] || '';
    },

    TOGGLE_ALERT: (state, data) => {
        state.visible = data;
    },
};

export default {
    namespaced: true,
    namespace: 'core',
    state,
    getters,
    actions,
    mutations
}