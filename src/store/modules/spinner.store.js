const state = {
    spinner: false,
};

const getters = {
    spinner: state => { return state.spinner },
};

const actions = {
    setSpinner: ({ commit }, data) => {
        commit('SET_SPINNER', data)
    },
};

const mutations = {
    SET_SPINNER: (state, data) => {
        state.spinner = !!data;
    }
};

export default {
    namespaced: true,
    namespace: 'core',
    state,
    getters,
    actions,
    mutations
}